"use client";
import InputBox from "@/components/common/InputBox";
import ProfileHero from "@/components/ProfileHero";
import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field } from "formik";

interface FormValues {
    name: string;
    message: string;
    amount: string;
}

const Username = () => {
    const initialValues: FormValues = {
        name: "",
        message: "",
        amount: "",
    };

    const handleSubmit = (values: FormValues) => {
        console.log("Form values:", values);
    };

    // Sample supporters list (replace with dynamic data if needed)
    const supporters = [
        "John Doe - $50",
        "Jane Smith - $100",
        "Alex Johnson - $30",
        "Emily Brown - $25",
        "Michael Williams - $80",
        "Jessica Davis - $40",
        "David Wilson - $60",
        "Sarah Martinez - $90",
        "Chris Taylor - $70",
        "Ashley Anderson - $20",
    ];

    return (
        <>
            <ProfileHero />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <div className="w-full max-w-screen bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center mb-8">Support Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Supporters List */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold mb-4 text-center">Top Supporters</h2>
                            <div className="grid gap-3">
                                {supporters.map((supporter, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm"
                                    >
                                        <span className="text-sm text-gray-800">{index + 1}. {supporter}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold mb-4 text-center">Donate Now</h2>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched, setFieldValue }) => (
                                    <Form className="flex flex-col gap-4">
                                        <Field
                                            as={InputBox}
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            autoComplete="name"
                                            error={errors.name}
                                            touched={touched.name}
                                        />
                                        <Field
                                            as={InputBox}
                                            id="message"
                                            name="message"
                                            placeholder="Your Message"
                                            autoComplete="off"
                                            error={errors.message}
                                            touched={touched.message}
                                        />
                                        <Field
                                            as={InputBox}
                                            id="amount"
                                            name="amount"
                                            placeholder="Donation Amount"
                                            autoComplete="off"
                                            error={errors.amount}
                                            touched={touched.amount}
                                        />
                                        {/* Quick Pay Buttons */}
                                        <div className="flex justify-between mb-4 gap-10">
                                            <button
                                                type="button"
                                                className="w-1/3 rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400"
                                                onClick={() => setFieldValue("amount", "10")}
                                            >
                                                Pay $10
                                            </button>
                                            <button
                                                type="button"
                                                className="w-1/3 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400"
                                                onClick={() => setFieldValue("amount", "20")}
                                            >
                                                Pay $20
                                            </button>
                                            <button
                                                type="button"
                                                className="w-1/3 rounded-md bg-purple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-400"
                                                onClick={() => setFieldValue("amount", "30")}
                                            >
                                                Pay $30
                                            </button>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        >
                                            Donate
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Username;
