var data = './Hospitalization_Counts_and_Rates_of_Preventable_Hospitalizations__Under_18__for_Selected_Medical_Conditions_by_California_County__2005-2014.csv'

const parseDate = d3.timeParse('%Y')

d3.csv(data)
	.row((d) => {
		return {
			year: parseDate(d.Year),
			county: d['County'],
			description: d['Pediatric Quality Indicator Description'],
			totalPop: Number(d['Population']),
			count: Number(d['Count'])
		}
	})
	.get((error, data) => {
		data = data.filter((d) => {
			return d.county === 'STATEWIDE' && d.description === 'Asthma (Age 2-17)';
		})
		console.log(data)
		if (error) throw error;
		var height = 300
		var width = 500

		var max = d3.max(data, (d) => { return d.count; })
		var minDate = d3.min(data, (d) => { return d.year; })
		var maxDate = d3.max(data, (d) => { return d.year; })

		var y = d3.scaleLinear()
					.domain([0, max])
					.range([height, 0])

		var x = d3.scaleTime()
					.domain([minDate, maxDate])
					.range([0, width])

		var yAxis = d3.axisLeft(y)
		var xAxis = d3.axisBottom(x)

		var svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%')

		var margin = {left: 60, right: 60, top: 40, bottom: 0}

		var chartGroup =
				svg.append('g')
					.attr('transform', 'translate('+margin.left+','+margin.right+')')

		var line = d3.line()
						.x((d) => { return x(d.year); })
						.y((d) => { return y(d.count); })

		chartGroup.append('path').attr('d', line(data))
							.attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

		chartGroup.append('g')
					.attr('class', 'x axis')
					.attr('transform', 'translate(0,'+height+')')
					.call(xAxis)

		chartGroup.append('g')
					.attr('class', 'y axis')
					.call(yAxis)



	})












