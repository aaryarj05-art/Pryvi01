function App() {
    return (
        <div className="min-h-screen bg-slate-50 flex justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl space-y-8">
                <header className="border-b border-slate-200 pb-6 text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Pryvi Dashboard
                    </h1>
                </header>

                <main className="mt-8 flex justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 w-full max-w-md text-center">
                        <h2 className="text-2xl font-bold text-slate-800">Stroke Risk</h2>
                        <p className="text-slate-500 mt-2">Placeholder for stroke risk model</p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
