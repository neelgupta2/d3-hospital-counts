const data = 'https://chhs.data.ca.gov/api/views/6hmm-zzc6/rows.json'

const parseDate = d3.timeParse('%Y')

const height = 200
const width = 500
const margin = {left: 50, right: 50, top: 40, bottom: 40}

const tree = d3.tree().size([width, height])

const svg = d3.select('body').append('svg').attr('width', '100%').attr('height', '100%')
const chartGroup = svg.append('g').attr('transform', 'translate('+margin.left+','+margin.top+')')

d3.json(data).get((error, data) => {
	var root = d3.hierarchy(data.meta)
	console.log(root.data.view.columns)
	tree(root)

	chartGroup.selectAll('circle')
		.data(root.descendants())
		.enter().append('circle')
		          .attr("cx",(d) => { return d.x; })
		          .attr("cy",(d) => { return d.y; })
		          .attr("r","5")

	chartGroup.selectAll('path')
		.data(root.descendants().slice(1))
		.enter().append('path')
					.attr('class', 'link')
					.attr('d', (d) => {
						return "M"+d.x+","+d.y+"C"+d.x+","+(d.parent.y+d.y)/2+" "+d.parent.x+","+(d.y+d.parent.y)/2+" "+d.parent.x+","+d.parent.y;
					})


})

