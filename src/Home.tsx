export default function Home({ weatherData }: any) {
	return (
		<>
			<h1>Dashboard</h1>
			<div>
				{weatherData &&
					weatherData.map((entry: any) => {
						console.log(entry);
						return (
							entry.name && (
								<div>
									<p>{entry.name}</p>
									<p>{entry.main.temp}</p>
								</div>
							)
						);
					})}
			</div>
		</>
	);
}
