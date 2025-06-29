import React from "react";
import { Header } from "./components/Header";
import { IPDisplayCard } from "./components/IPDisplayCard";
import { CountryFlag } from "./components/CountryFlag";
import { CountryInfoCard } from "./components/CountryInfoCard";
import { ErrorDisplay } from "./components/ErrorDisplay";
import { useGeoLocation } from "./hooks/useGeoLocation";

function App() {
	const { ipData, geoData, countryData, loading, error } = useGeoLocation();

	if (error) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
				<ErrorDisplay error={error} onRetry={() => window.location.reload()} />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100">
			<div className="container mx-auto px-4 py-8 max-w-7xl">
				<Header />

				<div className="grid gap-6 lg:gap-8">
					{/* Top section - IP and Location */}
					<div className="grid md:grid-cols-1 gap-6">
						<IPDisplayCard ipData={ipData} geoData={geoData} loading={loading} />
					</div>

					{/* Bottom section - Flag and Country Info */}
					<div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
						<CountryFlag countryCode={geoData?.country_code} countryName={countryData?.name.common} loading={loading} />
						<CountryInfoCard countryData={countryData} geoData={geoData} loading={loading} />
					</div>
				</div>

				{/* Footer */}
				<div className="text-center mt-12 pt-8 border-t border-slate-200">
					<p className="text-slate-500 text-sm">Powered by IPify, GeoJS, REST Countries & Flag CDN</p>
					<p className="text-slate-500 text-sm">
						&copy; {new Date().getFullYear()}{" "}
						<a href="https://reikama-414-site-v3.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
							ReiKama414
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
