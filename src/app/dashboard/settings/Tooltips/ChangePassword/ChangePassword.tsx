'use client';

import { useState } from 'react';

export default function ChangePasswordModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const openModal = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setError('');
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('Nowe hasło i jego potwierdzenie muszą być takie same.');
            return;
        }

        if (newPassword.length < 6) {
            setError('Nowe hasło musi mieć co najmniej 6 znaków.');
            return;
        }

        // TODO: Wywołanie API do zmiany hasła
        console.log('Zmiana hasła:', { oldPassword, newPassword });

        closeModal();
    };

    return (
        <>
            <button
                onClick={openModal}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Zmień hasło
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Zmień hasło
                        </h2>

                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2 text-sm font-medium">
                                Stare hasło
                            </label>
                            <input
                                type="password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                                className="w-full mb-4 p-2 border rounded"
                            />

                            <label className="block mb-2 text-sm font-medium">
                                Nowe hasło
                            </label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="w-full mb-4 p-2 border rounded"
                            />

                            <label className="block mb-2 text-sm font-medium">
                                Powtórz nowe hasło
                            </label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full mb-2 p-2 border rounded"
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
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Zapisz
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
