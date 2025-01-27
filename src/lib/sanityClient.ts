import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: "v2025-01-23",
    dataset: "production",
    projectId: "vg3aodx1",
    token: "skAP8qEg4JcUDYAgA9rgzHUXRr1EHZ9vSDpMYytUMCdRZBcAQjdGo4MxGjtUKPkl8FozyjrIDfK9vPBpmhJuZ7JXaHBPbPiEB4LFkU0HbjT0euDjfVp4Ee6dQvRPbCcOACLrGRwdRhoz1vwxG3bHw9kasloFfTV87RbEnC9fPGgG1m5KxiLP",
    useCdn: true,
})