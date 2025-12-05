'use client';

import { FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  submit?: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    // Phone is optional, but if provided, validate format
    if (formData.phone && !/^[0-9+\s()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      
      if (!apiBaseUrl) {
        throw new Error('API URL not configured');
      }

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        ...(formData.phone.trim() && { phone: formData.phone.trim() }),
      };

      const response = await fetch(`${apiBaseUrl}/waiting-list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Une erreur est survenue');
      }

      // Success
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Erreur de connexion. Réessayez plus tard.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#FFFAF5] p-10 text-center">
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-righteous text-black mb-3 uppercase">Bienvenue !</h3>
        <p className="text-gray-700 font-roboto">
          Tu recevras par email tous les détails sur tes avantages exclusifs et l'accès prioritaire au lancement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-white p-8 rounded-xl shadow border-[#D9D9D9]">
        
        {/* Name Input */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-roboto-condensed font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border-2 ${
              errors.name ? 'border-red-500' : 'border-[#D9D9D9]'
            } text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors font-roboto`}
            placeholder="Ton nom"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 font-roboto">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-roboto-condensed font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border-2 ${
              errors.email ? 'border-red-500' : 'border-[#D9D9D9]'
            } text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors font-roboto`}
            placeholder="ton@email.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 font-roboto">{errors.email}</p>
          )}
        </div>

        {/* Phone Input */}
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-roboto-condensed font-medium text-gray-700 mb-2 uppercase tracking-wider">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white border-2 ${
              errors.phone ? 'border-red-500' : 'border-[#D9D9D9]'
            } text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors font-roboto`}
            placeholder="+221 77 123 45 67"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600 font-roboto">{errors.phone}</p>
          )}
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="mb-5 p-4 bg-red-50 border-2 border-red-200">
            <p className="text-sm text-red-700 font-roboto">{errors.submit}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-black hover:bg-gray-800 text-white font-roboto font-medium uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Inscription en cours...
            </span>
          ) : (
            "M'inscrire à la liste d'attente"
          )}
        </button>
        
        <p className="mt-5 text-xs text-gray-500 text-center font-roboto-condensed">
          Recevez les détails par email lors du lancement
        </p>
      </div>
    </form>
  );
}
