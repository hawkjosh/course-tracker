require('dotenv').config()
import Airtable from 'airtable'
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID)
const table = base(process.env.AIRTABLE_TABLE_NAME)

export default table
