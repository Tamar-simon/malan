// OrderContact.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ProductList from './ProductList';

const OrderContact: React.FC = () => {
    const selectedProducts = useSelector((state: RootState) => state.store.products);
    
    // State for form fields
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    // Validation states
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }
        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailPattern.test(email)) {
            newErrors.email = "Email is invalid.";
        }
        if (!address.trim()) {
            newErrors.address = "Address is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        const orderData = {
            firstName,
            lastName,
            email,
            address,
            products: Array.from(selectedProducts),
        };

        try {
            const response = await fetch('http://localhost:5000/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                console.log("Order submitted successfully!");
                // Reset form fields after successful submission
                setFirstName('');
                setLastName('');
                setEmail('');
                setAddress('');
            } else {
                console.error("Failed to submit order:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting order:", error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Order Summary</h1>
            <ProductList />
            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <div>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
                </div>
                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default OrderContact;
