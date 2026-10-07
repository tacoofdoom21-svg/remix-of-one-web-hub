export type SectionPriority = { papers: string; topics: string[] };

// User-supplied Gemini analysis; these are revision priorities, not predictions.
export const examPriorities: Record<string, Record<string, SectionPriority>> = {
  "hardware-cpu": {
    processor: { papers: "Q2", topics: ["CPU components: ALU and Control Unit", "Machine cycle steps", "Multi-core processors vs. multiple processors"] },
    connections: { papers: "Q2", topics: ["Bus types and functions"] },
  },
  "input-output": {
    pointing: { papers: "Q1", topics: ["Touchscreens", "Kiosk input devices"] },
    output: { papers: "Q1", topics: ["LED monitors", "Non-impact printers", "Output matching: force-feedback, tactile output and data projectors"] },
  },
  storage: {
    fundamentals: { papers: "Q1", topics: ["Storage devices vs. storage media"] },
    drives: { papers: "Q1", topics: ["SSD advantages", "Hard disk storage techniques"] },
    "portable-cloud": { papers: "Q1", topics: ["Smart cards", "Memory cards"] },
    enterprise: { papers: "Q1", topics: ["CD-ROM vs. CD-R vs. CD-RW", "Tape storage"] },
  },
  applications: {
    software: { papers: "Q3", topics: ["Freeware vs. open-source vs. shareware", "Native, cloud, web and mobile web applications"] },
    productivity: { papers: "Q3", topics: ["Software suites"] },
  },
  "operating-systems": {
    functions: { papers: "Q3", topics: ["OS core functions and coordinating operations", "Shutdown options"] },
    "interface-programs": { papers: "Q3", topics: ["Purpose and types of user interfaces"] },
    "memory-devices": { papers: "Q3", topics: ["Memory management"] },
  },
  networks: {
    basics: { papers: "Q4", topics: ["Network types: LAN, WAN and others"] },
    architecture: { papers: "Q4", topics: ["Client/server network architecture"] },
    devices: { papers: "Q4", topics: ["Dedicated lines"] },
    media: { papers: "Q4", topics: ["Physical transmission media and transfer rates", "Fiber optics: advantages and disadvantages"] },
  },
  "databases-development": {
    data: { papers: "Q1 / Q4", topics: ["Data vs. information", "Database field names and data types", "Data validation checks"] },
    database: { papers: "Q4", topics: ["Database advantages and weaknesses", "DBMS functions"] },
    development: { papers: "Q2", topics: ["SDLC, project management and feasibility assessments", "Data gathering techniques", "Unit, system, integration and acceptance testing", "Low-level vs. procedural programming languages", "Procedural translation: compilers and interpreters"] },
  },
  "graphics-multimedia": {
    graphics: { papers: "Q5", topics: ["Bitmap vs. vector graphics"] },
    compression: { papers: "Q5", topics: ["Lossy vs. lossless compression", "Run-Length Encoding (RLE) calculations"] },
    "audio-video": { papers: "Q5", topics: ["Multimedia applications", "Multimedia development: analysis, design and production", "Streaming vs. non-streaming"] },
  },
  "security-society": {
    risks: { papers: "Q5", topics: ["Cybercrime perpetrators: hackers, crackers and script kiddies"] },
    attacks: { papers: "Q5", topics: ["Safeguards and practices against attacks and malware"] },
    access: { papers: "Q5", topics: ["Two-step verification"] },
    "ethics-privacy": { papers: "Q5", topics: ["Unauthorized data collection techniques", "Selective backup vs. continuous data protection (CDP)"] },
  },
};

export function getUnitPriority(slug: string) {
  const sections = examPriorities[slug];
  if (!sections) return undefined;
  return { count: Object.keys(sections).length, papers: [...new Set(Object.values(sections).flatMap((section) => section.papers.split(" / ")))].join(" / ") };
}