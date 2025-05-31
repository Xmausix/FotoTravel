'use client';

import { useState } from 'react';

export default function TwoFactorModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const openModal = () => {
        setCode('');
        setError('');
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!/^\d{6}$/.test(code)) {
            setError('Kod musi mieć 6 cyfr');
            return;
        }

        // TODO: Wywołanie API do weryfikacji kodu 2FA
        console.log('Kod 2FA:', code);

        closeModal();
    };

    return (
        <>
            <button
                onClick={openModal}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Zweryfikuj 2FA
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative">
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Weryfikacja 2FA
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2 text-sm font-medium">
                                Wprowadź 6-cyfrowy kod
                            </label>
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                maxLength={6}
                                pattern="\d{6}"
                                inputMode="numeric"
                                className="w-full mb-2 p-2 border rounded text-center text-lg tracking-widest"
                            />
                            {error && (
                                <p className="text-red-600 text-sm mb-2">{error}</p>
                            )}

                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-300 rounded"
                                >
                                    Anuluj
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    Potwierdź
                                </button>
                            </div>
                        </form>

                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                            aria-label="Zamknij"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
