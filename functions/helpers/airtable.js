// require('dotenv').config()
import dotenv from 'dotenv'

// var Airtable = require('airtable')
import Airtable from 'airtable'

// var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
// 	process.env.AIRTABLE_BASE_ID
// )
dotenv.config()
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
)
// const table = base(process.env.AIRTABLE_TABLE_NAME)
export const table = base(process.env.AIRTABLE_TABLE_NAME)

// module.exports = { table }
