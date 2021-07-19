export const URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Table%201`
export const blogURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/blog`
export const historyURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/history`
export const config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
    }
}