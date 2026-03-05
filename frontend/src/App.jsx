import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        age: "",
        bloodPressure: "",
        diabetes: "No",
        cholesterol: "",
    });
    const [riskResult, setRiskResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8000/calculate-risk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    age: parseInt(formData.age, 10),
                    bloodPressure: parseInt(formData.bloodPressure, 10),
                    diabetes: formData.diabetes,
                    cholesterol: parseInt(formData.cholesterol, 10),
                }),
            });
            const data = await res.json();
            setRiskResult(data.risk);
        } catch (error) {
            console.error("Error calculating risk:", error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl space-y-8">
                <header className="border-b border-slate-200 pb-6 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Pryvi Dashboard
                    </h1>
                </header>

                <main className="mt-8 flex justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Stroke Risk</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Age</label>
                                <input type="number" name="age" required value={formData.age} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Blood Pressure (Systolic)</label>
                                <input type="number" name="bloodPressure" required value={formData.bloodPressure} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Diabetes</label>
                                <select name="diabetes" value={formData.diabetes} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2">
                                    <option value="No">No</option>
                                    <option value="Yes">Yes</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Cholesterol</label>
                                <input type="number" name="cholesterol" required value={formData.cholesterol} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border p-2" />
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6">
                                Calculate Risk
                            </button>
                        </form>

                        {riskResult !== null && (
                            <div className="mt-6 p-4 bg-slate-50 rounded-md border border-slate-200 text-center">
                                <p className="text-sm text-slate-500">Calculated Risk Score</p>
                                <p className="text-3xl font-bold text-slate-900 mt-1">{riskResult}</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
