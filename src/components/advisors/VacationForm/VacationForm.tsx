'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { CATEGORIES_CONFIG } from '@/src/config/categories';
import styles from './VacationForm.module.scss';

// Definición del esquema de validación
const schema = yup.object({
    destination: yup.string().required('Please select a destination'),
    travelDate: yup.date()
        .required('Please select a date')
        .min(new Date(), 'Date cannot be in the past'),
    numAdults: yup.number()
        .required('Number of adults is required')
        .min(1, 'At least 1 adult is required')
        .max(10, 'Maximum 10 adults allowed'),
    numChildren: yup.number()
        .required('Number of children is required')
        .min(0, 'Cannot be negative')
        .max(10, 'Maximum 10 children allowed'),
    budget: yup.string()
        .required('Budget is required')
        .test('is-currency', 'Please enter a valid amount', (value) => {
            if (!value) return false;
            return /^\$?\d+(\.\d{0,2})?$/.test(value.replace(/,/g, ''));
        }),
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must not exceed 50 characters'),
    email: yup.string()
        .required('Email is required')
        .email('Please enter a valid email address'),
    phone: yup.string()
        .required('Phone number is required')
        .matches(/^\+?[\d\s-()]+$/, 'Please enter a valid phone number')
}).required();

type FormData = yup.InferType<typeof schema>;

export default function VacationForm() {
    const { register, handleSubmit, formState: { errors }, control, setValue, watch } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            numAdults: 0,
            numChildren: 0,
            budget: '$'
        }
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Aquí irá la lógica para enviar el formulario
    };

    // Función para formatear el valor del presupuesto
    const formatCurrency = (value: string) => {
        const numbers = value.replace(/[^\d]/g, '');
        return `$${numbers}`;
    };

    return (
        <form id="vacation-form" onSubmit={handleSubmit(onSubmit)} className={styles.vacationForm}>
            <div className={styles.header}>
                <h2>Let me help plan your next vacation! <span>✈️</span></h2>
                <p>Fill out the form and I&apos;ll work with you to help make it happen</p>
            </div>

            <div className={styles.formSection}>
                <h3>Trip Details</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="destination">Where do you want to go?</label>
                        <select id="destination" {...register('destination')}>
                            <option value="">Pick a destination...</option>
                            {Object.entries(CATEGORIES_CONFIG)
                                .filter(([key]) => key !== 'location')
                                .map(([key, category]) => (
                                    <optgroup key={key} label={category.title}>
                                        {category.options.map((option) => (
                                            <option key={option.id} value={option.id}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                        </select>
                        {errors.destination && <p className={styles.error}>{errors.destination.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="travelDate">When do you want to go?</label>
                        <DatePicker
                            id="travelDate"
                            selected={watch('travelDate')}
                            onChange={(date) => setValue('travelDate', date as Date)}
                            minDate={new Date()}
                            placeholderText="Pick a date range"
                        />
                        {errors.travelDate && <p className={styles.error}>{errors.travelDate.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="numAdults">Number of Adults</label>
                        <input
                            type="number"
                            id="numAdults"
                            min={1}
                            max={10}
                            placeholder="Enter or pick a number"
                            {...register('numAdults', { valueAsNumber: true })}
                        />
                        {errors.numAdults && <p className={styles.error}>{errors.numAdults.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="numChildren">Number of Children ({'<'}13 years old)</label>
                        <input
                            type="number"
                            id="numChildren"
                            min={0}
                            max={10}
                            placeholder="Enter or pick a number"
                            {...register('numChildren', { valueAsNumber: true })}
                        />
                        {errors.numChildren && <p className={styles.error}>{errors.numChildren.message}</p>}
                    </div>

                    <div className={styles.formGroup + ' ' + styles.fullWidth}>
                        <label htmlFor="budget">Total Budget (not including flights)</label>
                        <input
                            type="text"
                            id="budget"
                            placeholder="Minimum $1,500"
                            {...register('budget')}
                            onChange={(e) => {
                                const formatted = formatCurrency(e.target.value);
                                setValue('budget', formatted);
                            }}
                        />
                        {errors.budget && <p className={styles.error}>{errors.budget.message}</p>}
                    </div>
                </div>
            </div>

            <div className={styles.formSection}>
                <h3>Contact Info</h3>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            {...register('name')}
                        />
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Your Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="you@email.com"
                            {...register('email')}
                        />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </div>

                    <div className={styles.formGroup + ' ' + styles.fullWidth}>
                        <label htmlFor="phone">Your Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone"
                            {...register('phone')}
                        />
                        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                    </div>
                </div>
            </div>

            <button type="submit" className={styles.submitButton}>
                Request a Quote
            </button>
        </form>
        
    );
}