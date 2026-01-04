import React, { useState, useRef, useEffect } from 'react';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Search, AlertCircle, CheckCircle2, Building, User, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils'; // Assuming utils exists, otherwise I will inline or create

// Fallback for cn if not exists, but usually provided in modern stacks. 
// If it fails I will fix in next step. safer to inline a simple version for now to avoid breaking if file missing.
function classNames(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

type StepType = 'text' | 'selection' | 'contact';

interface Question {
    id: string;
    type: StepType;
    title: string;
    subtitle?: string;
    placeholder?: string;
    options?: {
        id: string;
        label: string;
        icon?: React.ReactNode;
        color?: string; // specific color class
    }[];
}

const QUESTIONS: Question[] = [
    // PART 1: IDENTITY
    {
        id: 'name',
        type: 'text',
        title: "To personalize your report, what is your name?",
        placeholder: "Dr. Name..."
    },
    {
        id: 'clinic_name',
        type: 'text',
        title: "What is your clinic called?",
        placeholder: "Clinic Name..."
    },
    {
        id: 'location',
        type: 'text',
        title: "Which city are you located in?",
        placeholder: "e.g. Kuala Lumpur"
    },
    // PART 2: TRAP QUESTIONS
    {
        id: 'invisibility_trap',
        type: 'selection',
        title: "When you search 'Clinic in [Location]' on Google Maps, who do you see first?",
        options: [
            { id: 'me', label: 'My Clinic (I dominate the map)', icon: <CheckCircle2 className="w-6 h-6" />, color: 'text-green-600 bg-green-50 border-green-200' },
            { id: 'competitors', label: 'My Competitors (They rank higher)', icon: <Search className="w-6 h-6" />, color: 'text-red-600 bg-red-50 border-red-200' },
            { id: 'unknown', label: "I don't know / Not listed", icon: <AlertCircle className="w-6 h-6" />, color: 'text-amber-600 bg-amber-50 border-amber-200' }
        ]
    },
    {
        id: 'operational_trap',
        type: 'selection',
        title: "If a patient has an emergency at 10:00 PM and wants to book a slot for tomorrow, what happens?",
        options: [
            { id: 'instant', label: 'Instant Booking (Website)', icon: <CheckCircle2 className="w-6 h-6" />, color: 'text-green-600 bg-green-50 border-green-200' },
            { id: 'waiting', label: 'The Waiting Game (WhatsApp)', icon: <Clock className="w-6 h-6 text-amber-600" />, color: 'text-amber-600 bg-amber-50 border-amber-200' },
            { id: 'lost', label: 'Lost Lead (No contact)', icon: <AlertCircle className="w-6 h-6 text-red-600" />, color: 'text-red-600 bg-red-50 border-red-200' }
        ]
    },
    {
        id: 'perception_trap',
        type: 'selection',
        title: "Does your current digital presence match the quality of your medical care?",
        options: [
            { id: 'yes', label: 'Yes, it looks premium', icon: <CheckCircle2 className="w-6 h-6" />, color: 'text-green-600 bg-green-50 border-green-200' },
            { id: 'no', label: 'No, looking outdated/messy', icon: <AlertCircle className="w-6 h-6" />, color: 'text-red-600 bg-red-50 border-red-200' },
            { id: 'absent', label: "We don't have a presence", icon: <Search className="w-6 h-6" />, color: 'text-amber-600 bg-amber-50 border-amber-200' }
        ]
    },
    // PART 3: PROMISE
    {
        id: 'contact',
        type: 'contact',
        title: "Where should we send the Diagnosis?",
        subtitle: "We are generating your Competitive Analysis now...",
    }
];

export default function AuditWizard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Ref for the input to auto-focus
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Focus input on step change if it's a text step
        if (QUESTIONS[currentStep].type === 'text' || QUESTIONS[currentStep].type === 'contact') {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep < QUESTIONS.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleAnswer = (value: any) => {
        setAnswers(prev => ({ ...prev, [QUESTIONS[currentStep].id]: value }));
    };

    const handleSelection = (optionId: string) => {
        handleAnswer(optionId);
        // Auto advance for selection
        setTimeout(() => {
            handleNext();
        }, 400); // Slight delay for visual feedback
    };

    const handleTextSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!answers[QUESTIONS[currentStep].id]) return; // Validation: required
        handleNext();
    };

    const handleAutofillTest = () => {
        setAnswers({
            name: "Rizal Hakim",
            clinic_name: "Klinik Wangsa",
            location: "Kuala Lumpur",
            invisibility_trap: "competitors",
            operational_trap: "waiting",
            perception_trap: "no",
            email: "lamanify@gmail.com",
            whatsapp: "0138747075"
        });
        setCurrentStep(QUESTIONS.length - 1); // Go to contact step
    };

    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const isLocal = window.location.hostname === 'localhost';
            const endpoint = "https://nnfmmovmcxjlmbisrnkt.supabase.co/functions/v1/submit-growth-audit";

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    answers,
                    environment: isLocal ? 'test' : 'production'
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Submission failed');
            }

            setIsCompleted(true);
        } catch (err: any) {
            console.error("Submission Error:", err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const progress = ((currentStep) / QUESTIONS.length) * 100;
    const currentQ = QUESTIONS[currentStep];

    // Dynamic Title Injection
    const getTitle = () => {
        let title = currentQ.title;
        if (title.includes('[Location]')) {
            title = title.replace('[Location]', answers['location'] || 'your city');
        }
        return title;
    };

    if (isCompleted) {
        return (
            <LazyMotion features={domAnimation}>
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-xl text-center"
                >
                    <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-brand/5">
                        <CheckCircle2 className="w-10 h-10 text-brand" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Diagnosis Generated!</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Check your email/WhatsApp. We've sent a breakdown of your clinic's growth gaps.
                    </p>
                    <a href="/" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-brand to-brand-light text-white font-bold rounded-lg hover:shadow-lg hover:shadow-brand/20 transition-all hover:scale-105">
                        Back to Home
                    </a>
                </m.div>
            </LazyMotion>
        )
    }

    return (
        <LazyMotion features={domAnimation}>
            <div className="w-full relative">
                {/* Temporary Test Button */}
                <button
                    onClick={handleAutofillTest}
                    className="fixed top-4 right-4 z-[100] px-4 py-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold rounded-full border border-white/10 shadow-2xl hover:bg-brand transition-all active:scale-95"
                >
                    TEST AUTOFILL 🧪
                </button>

                {/* Progress Bar */}
                <div className="mb-8 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <m.div
                        className="h-full bg-gradient-to-r from-brand to-brand-light"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-[0_32px_64px_-16px_rgba(233,32,79,0.12)] border border-slate-100 overflow-hidden relative min-h-[460px] flex flex-col justify-center p-8 md:p-12">

                    <AnimatePresence mode="wait">
                        <m.div
                            key={currentStep}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            {/* Question Header */}
                            <div className="mb-8">
                                {currentQ.type === 'text' && (
                                    <span className="text-xs font-bold tracking-wider text-brand uppercase mb-2 block">
                                        Step {currentStep + 1} of {QUESTIONS.length}
                                    </span>
                                )}
                                {currentQ.type === 'selection' && (
                                    <span className="text-xs font-bold tracking-wider text-red-500 uppercase mb-2 block flex items-center gap-2">
                                        <AlertCircle className="w-3 h-3" /> Reality Check
                                    </span>
                                )}
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                                    {getTitle()}
                                </h2>
                                {currentQ.subtitle && (
                                    <p className="mt-3 text-gray-500">{currentQ.subtitle}</p>
                                )}
                            </div>

                            {/* Inputs / Options */}
                            <div>
                                {currentQ.type === 'text' && (
                                    <form onSubmit={handleTextSubmit}>
                                        <div className="relative group">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                value={answers[currentQ.id] || ''}
                                                onChange={(e) => handleAnswer(e.target.value)}
                                                placeholder={currentQ.placeholder}
                                                className="w-full text-2xl md:text-3xl border-b-2 border-gray-200 py-4 pr-16 focus:outline-none focus:border-brand transition-colors bg-transparent placeholder-gray-300 text-gray-800"
                                            />
                                            <button
                                                type="submit"
                                                disabled={!answers[currentQ.id]}
                                                className={cn(
                                                    "absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-brand to-brand-light text-white rounded-lg font-bold transition-all hover:shadow-lg hover:shadow-brand/20 disabled:opacity-0 disabled:pointer-events-none flex items-center gap-2",
                                                    "md:opacity-0 md:group-focus-within:opacity-100" // On desktop, hide until focus
                                                )}
                                            >
                                                <span className="text-sm md:hidden">OK</span>
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <p className="mt-4 text-sm text-gray-400 hidden md:block">Press <span className="font-bold">Enter ↵</span></p>
                                    </form>
                                )}

                                {currentQ.type === 'selection' && (
                                    <div className="grid gap-4">
                                        {currentQ.options?.map((option) => (
                                            <button
                                                key={option.id}
                                                onClick={() => handleSelection(option.id)}
                                                className={classNames(
                                                    "w-full p-6 text-left border-2 rounded-xl transition-all duration-200 group hover:scale-[1.02]",
                                                    answers[currentQ.id] === option.id
                                                        ? "border-brand bg-brand/5 ring-2 ring-brand/10"
                                                        : "border-gray-100 hover:border-gray-300 bg-white"
                                                )}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={classNames(
                                                        "p-3 rounded-lg shrink-0",
                                                        option.color ? option.color.replace('text-', 'bg-').replace('bg-', 'bg-opacity-10 ').split(' ')[1] : "bg-gray-100 text-gray-500"
                                                    )}>
                                                        {option.icon}
                                                    </div>
                                                    <span className="text-lg font-medium text-gray-900 group-hover:text-brand">
                                                        {option.label}
                                                    </span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {currentQ.type === 'contact' && (
                                    <form onSubmit={handleFinalSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                            <input
                                                ref={inputRef}
                                                required
                                                type="email"
                                                value={answers['email'] || ''}
                                                onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all outline-none"
                                                placeholder="doctor@clinic.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                                            <input
                                                required
                                                type="tel"
                                                value={answers['whatsapp'] || ''}
                                                onChange={(e) => setAnswers(prev => ({ ...prev, whatsapp: e.target.value }))}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all outline-none"
                                                placeholder="+60 12 345 6789"
                                            />
                                        </div>
                                        {error && (
                                            <p className="mb-4 text-sm text-red-500 font-medium text-center bg-red-50 p-3 rounded-lg border border-red-100 italic">
                                                {error}
                                            </p>
                                        )}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 bg-gradient-to-r from-brand to-brand-light text-white rounded-xl font-bold text-lg shadow-[0_20px_40px_-12px_rgba(233,32,79,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(233,32,79,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Analyzing...
                                                </>
                                            ) : (
                                                <>
                                                    Generate My Report
                                                    <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </m.div>
                    </AnimatePresence>

                </div>
            </div>
        </LazyMotion>
    );
}
