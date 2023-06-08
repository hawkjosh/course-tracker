import dotenv from 'dotenv'
import Airtable from 'airtable'

dotenv.config()
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_BASE_ID
)

export const table = base(process.env.AIRTABLE_TABLE_NAME)
