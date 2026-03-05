import { useState, useEffect } from "react";

function App() {
    const [backendStatus, setBackendStatus] = useState("Checking...");

    useEffect(() => {
        fetch("http://localhost:8000/health-check")
            .then((res) => res.json())
            .then((data) => setBackendStatus(data.status))
            .catch(() => setBackendStatus("offline"));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-lg">
                    Hello Pryvi
                </h1>
                <p className="text-slate-400 text-lg tracking-wide">
                    AI-Powered Biomedical Healthcare Intelligence
                </p>
                <div className="mt-8 pt-6 border-t border-slate-800/50">
                    <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${backendStatus === 'healthy' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'bg-red-400'}`}></span>
                        API Status: <span className="text-slate-300 font-medium capitalize">{backendStatus}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
