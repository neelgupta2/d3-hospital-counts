# d3-hospital-counts
Basic parse of CA hospital data to d3 graph

# Data
The dataset contains hospitalization counts and rates, statewide and by county, for 6 conditions plus 3 composite measures. Hospitalizations for these conditions are potentially preventable through access to high-quality outpatient care. The conditions include: asthma (age 2-17), diabetes short-term complications (age 6-17), gastroenteritis (age 3 months-17 years), perforated appendix (age 1-17), urinary tract infections (age 3 months-17 years), and low birth weight (<2500 grams). The data provides a good starting point for assessing quality of health services in the community. The data does not measure hospital quality.
SOURCE:
 https://www.healthdata.gov/dataset/hospitalization-counts-and-rates-preventable-hospitalizations-under-18-selected-medical

Parsed with d3.csv()

# D3
Included script and source in root folder.

# statewide.js
Basic line graph displaying all hospital visits for Asthma (Age 2-17) in California between 2005 and 2014.

# circlePacking.js
Inspiration: http://bl.ocks.org/mbostock/4063530
Goal: Display number of people with each condition in data set in 2014 out of total population that year.
Big Circle: total population
Smaller Circles: count of people who visited hospital for each condition