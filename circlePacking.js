var data = './Hospitalization_Counts_and_Rates_of_Preventable_Hospitalizations__Under_18__for_Selected_Medical_Conditions_by_California_County__2005-2014.csv'

const parseDate = d3.timeParse('%Y')

d3.csv(data)
	.row((d) => {
		return {
			year: d['Year'],
			county: d['County'],
			description: d['Pediatric Quality Indicator Description'],
			totalPop: d['Population'],
			count: Number(d['Count'])
		}
	})
	.get((error, data) => {
		if (error) throw error;

		data = data.filter((d) => { return d.county === 'STATEWIDE' && d.year === '2014'; })
		console.log(data)

	// const x = d3.scaleBand()
	// 				.domain(data)
	// 				.range(0, 170)
	// 				.paddingInner(0.1176)

	// const xAxis = d3.axisBottom(x)

	// svg.append("g")
	//       .attr("class","x axis hidden")
	//       .attr("transform","translate(0,300)")
	//       .call(xAxis)


	const svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%')

	var newX = 200;
	var newY;


	svg.selectAll('circle.first')
			.data(data)
			.enter().append('circle')
				.attr('class', 'first')
				.attr('cx', (d) => {
					newX += d.year / 1000;
					return newX;
				})
				.attr('cy', '50')
				.attr('r', (d) => { return d.totalPop / 100000; })


})