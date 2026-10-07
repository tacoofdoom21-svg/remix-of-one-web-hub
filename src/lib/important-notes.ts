// Detailed revision notes for the exam-priority topics, keyed by unit slug.
export type NoteImage = { src: string; alt: string; caption?: string };
export type NoteBlock = { heading: string; points: string[]; table?: { head: string[]; rows: string[][] }; images?: NoteImage[] };
export type ImportantUnit = { slug: string; papers: string; blocks: NoteBlock[] };

export const importantNotes: ImportantUnit[] = [
  { slug: "hardware-cpu", papers: "Q2", blocks: [
    { heading: "CPU components: Control Unit and ALU", points: [
      "The processor (CPU) interprets and carries out the basic instructions that operate a computer. It contains the control unit, the arithmetic logic unit (ALU) and registers.",
      "Control unit: directs and coordinates most operations. It interprets each instruction and initiates the action needed to carry it out — like a traffic officer for data.",
      "ALU: performs arithmetic (add, subtract, multiply, divide), comparison (equal to, greater than, less than) and logical operations (AND, OR, NOT).",
      "Registers: small, high-speed temporary storage locations inside the processor that hold data and instructions while they are being processed.",
      "System clock: controls the timing of all operations. Clock speed is measured in hertz; 1 GHz = one billion ticks per second.",
    ]},
    { heading: "Machine cycle (4 steps)", points: [
      "1. Fetch — obtain a program instruction or data item from memory.",
      "2. Decode — translate the instruction into signals the computer can execute.",
      "3. Execute — carry out the commands (done by the ALU).",
      "4. Store — write the result to memory (not storage).",
      "Pipelining: the processor begins fetching the next instruction before the current one finishes, improving speed.",
    ]},
    { heading: "Multi-core processor vs. multiple processors", points: [
      "Multi-core processor: a SINGLE chip with two or more separate processor cores (dual-core, quad-core, octa-core). Uses less power and generates less heat than separate chips; cores share the chip's connection to memory.",
      "Multiple processors (multiprocessing): two or more SEPARATE processor chips installed on the motherboard, common in servers and high-end workstations.",
      "Both allow tasks to be processed simultaneously, but performance depends on software being written to use parallel processing.",
    ], table: { head: ["", "Multi-core", "Multiple processors"], rows: [["Chips", "One chip, many cores", "Several separate chips"], ["Power/heat", "Lower", "Higher"], ["Typical use", "PCs, laptops, phones", "Servers, workstations"]] } },
    { heading: "Bus types and functions", points: [
      "A bus is an electrical channel that transfers electronic bits internally within the circuitry of a computer.",
      "A bus has two parts: the data bus (transfers actual data) and the address bus (transfers information about where the data should reside in memory).",
      "Bus width = number of bits transferred at a time; wider bus = faster transfer. Word size = number of bits the processor can interpret and execute at once (e.g. 64-bit).",
      "System bus (front side bus): connects the processor to main memory. Backside bus: connects the processor to cache. Expansion bus: connects the processor to peripheral devices via expansion slots (e.g. PCIe).",
    ]},
  ]},
  { slug: "input-output", papers: "Q1", blocks: [
    { heading: "Touchscreens", points: [
      "A touch screen is a touch-sensitive display device. Users interact by touching areas with a finger or stylus.",
      "Multi-touch screens recognize two or more points of contact at once — enabling gestures such as pinch-to-zoom, swipe and rotate.",
      "Uses: smartphones, tablets, ATMs, kiosks, point-of-sale terminals, car dashboards. Advantages: intuitive, no separate keyboard/mouse needed, durable in public settings.",
    ]},
    { heading: "Kiosk input devices", points: [
      "A kiosk is a freestanding terminal, usually with a touch screen, that provides information or services (e.g. airport check-in, ticket machines, self-checkout, ATMs).",
      "Common kiosk input: touch screen, barcode/QR scanner, magnetic stripe & chip card reader, contactless (NFC/RFID) reader, PIN pad, camera, microphone.",
      "Touch screens suit kiosks because they need no moving parts, are easy for first-time users and take up little space.",
    ]},
    { heading: "LED monitors", points: [
      "An LCD monitor uses liquid crystal; an LED monitor is an LCD that uses light-emitting diodes as the backlight.",
      "Advantages of LED: thinner and lighter, consumes less power, brighter with better contrast, longer lifespan, less heat. OLED uses organic molecules that emit their own light — no backlight, even thinner, can be flexible.",
      "Quality factors: resolution (pixels), response time (ms), brightness (nits), dot pitch (distance between pixels), contrast ratio.",
    ]},
    { heading: "Non-impact printers", points: [
      "A non-impact printer forms characters and graphics WITHOUT striking the paper (quieter than impact/dot-matrix printers).",
      "Inkjet: sprays tiny drops of liquid ink onto paper — low cost, good colour photos, higher cost per page.",
      "Laser: uses a laser beam and toner powder fused with heat — high speed, high quality, low cost per page; good for offices.",
      "Others: photo printers, thermal (heat on heat-sensitive paper, e.g. receipts), mobile printers, label printers, plotters & large-format printers, 3-D printers, all-in-one (print/scan/copy/fax).",
    ]},
    { heading: "Output matching: force feedback, tactile output, data projectors", points: [
      "Force feedback: game controllers/joysticks that send resistance or vibration to the user to simulate real actions (e.g. steering wheel resisting in a racing game).",
      "Tactile output: provides a physical response, e.g. a smartphone vibrating or a touchscreen buzzing when tapped (haptics).",
      "Data projector: projects text and images from a computer onto a large screen so an audience can see — used in classrooms and meetings. Types: LCD projectors and DLP (digital light processing) projectors.",
    ]},
  ]},
  { slug: "storage", papers: "Q1", blocks: [
    { heading: "Storage device vs. storage medium", points: [
      "Storage medium: the PHYSICAL MATERIAL on which data is kept (e.g. hard disk platter, flash memory chip, optical disc, tape).",
      "Storage device: the HARDWARE that records (writes) and/or retrieves (reads) items to and from a storage medium (e.g. disk drive, card reader, DVD drive).",
      "Reading = transferring from storage medium into memory (input). Writing = transferring from memory to storage medium (output).",
    ]},
    { heading: "SSD advantages", points: [
      "An SSD (solid-state drive) uses flash memory with no moving parts.",
      "Faster access times and data transfer rates; boots and loads programs faster.",
      "More durable and shock-resistant; runs quieter and cooler; uses less power (longer laptop battery life); lighter.",
      "Disadvantages: higher cost per GB and typically lower maximum capacity than HDDs.",
    ]},
    { heading: "Hard disk storage techniques", points: [
      "A hard disk has one or more inflexible, circular platters coated with magnetic material; read/write heads float just above the surface.",
      "Formatting divides the disk into tracks (concentric rings) and sectors (pie-shaped sections); a cluster is the smallest unit of space.",
      "Storage techniques: longitudinal recording (magnetic particles aligned horizontally) vs. perpendicular recording (aligned vertically — higher density and capacity).",
      "Head crash: when a read/write head touches the platter, damaging data. Performance depends on RPM, platters, heads, cache, and access time.",
    ]},
    { heading: "Smart cards and memory cards", points: [
      "Smart card: plastic card with an embedded chip (processor and/or memory). Uses: credit/debit cards, ID cards, SIM cards, transit cards, access control. Contact or contactless.",
      "Memory card: removable flash memory device inserted into a slot (camera, phone, reader). Formats: SD, SDHC, SDXC, miniSD, microSD, CompactFlash, xD.",
      "Difference: memory cards mainly STORE data; smart cards can also PROCESS data (e.g. authentication).",
    ]},
    { heading: "CD-ROM vs. CD-R vs. CD-RW", points: [
      "Optical discs store data using microscopic pits and lands read by a laser.",
    ], table: { head: ["Type", "Write", "Erase/rewrite", "Use"], rows: [["CD-ROM", "No (pre-recorded)", "No", "Software, music distribution"], ["CD-R", "Once", "No", "Archiving, burning one copy"], ["CD-RW", "Many times", "Yes", "Reusable backups, transfers"]] } },
    { heading: "Tape storage", points: [
      "Magnetic tape: a magnetically coated ribbon of plastic that can store large amounts of data at low cost.",
      "Uses SEQUENTIAL access — data must be read in order, so retrieval is slow compared with direct (random) access on disks.",
      "Used mainly by businesses for long-term archiving and backup. Tape library: automated system holding many tape cartridges.",
    ]},
  ]},
  { slug: "applications", papers: "Q3", blocks: [
    { heading: "Freeware vs. open source vs. shareware", points: [
      "Retail / custom software are paid alternatives; the following are distribution models often compared in exams.",
    ], table: { head: ["Type", "Cost", "Source code", "Notes"], rows: [["Freeware", "Free", "Not available", "Copyrighted; cannot be resold or modified"], ["Open source", "Usually free", "Available", "Can be modified and redistributed (e.g. Linux, LibreOffice)"], ["Shareware", "Free trial, then pay", "Not available", "Copyrighted; trial period or limited features"]] } },
    { heading: "Native, cloud, web and mobile web apps", points: [
      "Native app: installed on and written specifically for a particular device/OS (e.g. iOS or Android app); can use device features and work offline.",
      "Web app: application stored on a web server that you access through a browser; no installation, often requires Internet.",
      "Mobile web app: web app optimized for a mobile device's browser screen size.",
      "Cloud app / SaaS: software delivered over the Internet on a subscription; data stored in the cloud and accessed from any device (e.g. Google Docs, Microsoft 365).",
    ]},
    { heading: "Software suites", points: [
      "A software suite is a collection of individual related applications sold as a single package (e.g. Microsoft Office: Word, Excel, PowerPoint, Outlook).",
      "Advantages: costs less than buying each app individually; consistent interface makes it easier to learn; data integrates easily between apps.",
    ]},
  ]},
  { slug: "operating-systems", papers: "Q3", blocks: [
    { heading: "OS core functions", points: [
      "An operating system is a set of programs that coordinates all activities among hardware devices and contains instructions that allow you to run application software.",
      "Functions: start and shut down the computer; provide a user interface; manage programs; manage memory; coordinate tasks; configure devices; establish Internet connection; monitor performance; provide file management and utilities; update automatically; control network; administer security.",
      "Booting: cold boot (from power off) vs. warm boot (restart while on). The kernel is the core, memory-resident part of the OS.",
    ]},
    { heading: "Shutdown options", points: [
      "Shut down / power off: closes all programs and turns the computer off.",
      "Restart: shut down then boot again (warm boot) — used after updates.",
      "Sleep mode: saves open work to memory and puts the computer into low-power state; resumes quickly but needs power.",
      "Hibernate: saves open work to storage and turns off; uses no power, resumes slower than sleep.",
      "Lock: secures the screen; sign out/log off: ends the user session.",
    ]},
    { heading: "User interfaces", points: [
      "A user interface controls how you enter data and instructions and how information is displayed.",
      "Graphical user interface (GUI): interact with menus, icons, windows and buttons — easy to learn.",
      "Command-line interface: type commands with the keyboard — powerful, used by network admins and developers, harder to learn.",
      "Natural user interface (NUI): interact through touch, gestures, voice (e.g. Siri, Kinect).",
    ]},
    { heading: "Memory management", points: [
      "Purpose: optimize use of RAM — allocate data and instructions to areas of memory while they are being processed, then release them.",
      "Virtual memory: when RAM is full, the OS uses a portion of the storage medium as additional memory. A swap file / page file holds swapped data; paging moves pages between RAM and storage.",
      "Thrashing: when the OS spends so much time paging that performance severely slows.",
    ]},
  ]},
  { slug: "networks", papers: "Q4", blocks: [
    { heading: "Network types", points: [], table: { head: ["Type", "Area", "Example"], rows: [["PAN", "Around one person (few metres)", "Bluetooth phone + earbuds"], ["LAN", "Limited area: home, school, office building", "School computer lab"], ["MAN", "City or town", "City-wide Wi-Fi, campus network"], ["WAN", "Large geographic region / worldwide", "The Internet, bank branches network"]] } },
    { heading: "Client/server architecture", points: [
      "One or more computers act as a SERVER (controls access to hardware, software and resources; provides centralized storage) and the other computers are CLIENTS that request services.",
      "Dedicated servers perform specific tasks: file server, print server, database server, web server, mail server.",
      "Advantages: centralized security, backups and management; scalable. Disadvantages: expensive, needs a network administrator, server failure affects everyone.",
      "Contrast with peer-to-peer (P2P): each computer shares resources equally, no central server — small networks, cheaper but less secure.",
    ]},
    { heading: "Dedicated lines", points: [
      "A dedicated line is a type of always-on physical connection between two communications devices (not shared/switched).",
      "Types: cable Internet, DSL, ISDN, fiber to the premises (FTTP), T-carrier lines (T1, T3), ATM.",
      "Businesses use them for consistent, reliable speed; cost is higher than dial-up or shared lines.",
    ]},
    { heading: "Physical transmission media & transfer rates", points: [
      "Twisted-pair cable: pairs of copper wires twisted together to reduce noise — cheap, used in LANs and telephone lines.",
      "Coaxial cable: single copper wire surrounded by insulating layers and shielding — cable TV and Internet; less interference than twisted pair.",
      "Fiber-optic cable: strands of glass/plastic that transmit light pulses — highest speed.",
      "Transfer rate (bandwidth) is measured in bits per second: Kbps, Mbps, Gbps.",
    ]},
    { heading: "Fiber optics: advantages and disadvantages", points: [
      "Advantages: much higher capacity/bandwidth; less susceptible to noise and electromagnetic interference; better security (hard to tap); smaller and lighter; signals travel longer distances.",
      "Disadvantages: higher cost of cable and installation; more difficult to install, splice and modify; fragile.",
    ]},
  ]},
  { slug: "databases-development", papers: "Q1 / Q2 / Q4", blocks: [
    { heading: "Data vs. information", points: [
      "Data: raw, unprocessed collection of facts, numbers, words, images, audio or video.",
      "Information: data that has been processed — organized, meaningful and useful.",
      "Valuable information is accurate, verifiable, timely, organized, accessible, useful and cost-effective.",
    ]},
    { heading: "Field names and data types", points: [
      "Hierarchy: character → field → record → file (table) → database. A primary key uniquely identifies each record.",
      "Common data types: Text, Numeric, Currency, Date/Time, Boolean (Yes/No), Memo/Long text, Hyperlink, Object, Attachment.",
      "Field name: unique name for a field (e.g. StudentID). Field size: maximum number of characters.",
    ]},
    { heading: "Data validation checks", points: [], table: { head: ["Check", "What it does", "Example"], rows: [["Alphabetic/numeric", "Only letters or only numbers allowed", "Name has no digits"], ["Range", "Value within limits", "Mark 0–100"], ["Consistency", "Related fields logically agree", "Hire date after birth date"], ["Completeness", "Required fields not blank", "Email must be filled"], ["Check digit", "Number calculated to verify a code", "ISBN, bank account"], ["Format/picture", "Matches pattern", "DD/MM/YYYY"]] } },
    { heading: "Database advantages & weaknesses", points: [
      "Advantages: reduced data redundancy; improved data integrity; shared data; easier access; reduced development time; better security; easier backup.",
      "Weaknesses: more complex; requires more memory, storage and processing power; vulnerable — a single failure can affect many users; higher cost.",
    ]},
    { heading: "DBMS functions", points: [
      "A DBMS (database management system) lets users create, access and manage a database.",
      "Functions: data dictionary; file retrieval & maintenance (query, forms, reports — add, modify, delete records); data security (access privileges); backup and recovery (backups, logs, rollback/forward); concurrent access control.",
      "Query language example: SQL.",
    ]},
    { heading: "SDLC, project management & feasibility", points: [
      "SDLC phases: Planning → Analysis → Design → Implementation → Support & Security.",
      "Project management: planning, scheduling and controlling activities (tools: Gantt chart, PERT chart). Scope creep: when requirements grow beyond the original plan.",
      "Feasibility assessment — four types: Operational (will users accept it?), Schedule (can it be done on time?), Technical (do we have the technology/expertise?), Economic/cost-benefit (do benefits outweigh costs?).",
    ]},
    { heading: "Data gathering techniques", points: [
      "Review documentation; observe users; survey/questionnaire; interview; joint-application design (JAD) sessions; research (trade journals, Internet).",
    ]},
    { heading: "Testing types", points: [
      "Unit test: verifies each individual program or module works correctly on its own.",
      "Systems test: verifies all programs in the application work together properly.",
      "Integration test: verifies the application works with other applications/systems.",
      "Acceptance test: performed by end users to check the new system works with actual data and meets requirements.",
    ]},
    { heading: "Low-level vs. procedural languages; compilers vs. interpreters", points: [
      "Low-level languages are machine-dependent: machine language (1st gen, binary 0s and 1s) and assembly language (2nd gen, symbolic codes/mnemonics, needs an assembler).",
      "Procedural (3rd generation) languages use English-like instructions and are machine-independent (e.g. C, COBOL). Programs must be translated.",
      "Compiler: translates the whole source program into machine language (object code) before execution; lists all errors at the end; runs faster once compiled.",
      "Interpreter: translates and executes one statement at a time; stops at each error; no object code; slower to run but easier to debug.",
    ]},
  ]},
  { slug: "graphics-multimedia", papers: "Q5", blocks: [
    { heading: "Bitmap vs. vector graphics", points: [], table: { head: ["", "Bitmap (raster)", "Vector"], rows: [["Made of", "Grid of pixels", "Mathematical shapes (lines, curves)"], ["Scaling", "Loses quality (pixelation)", "Scales without loss"], ["File size", "Larger", "Smaller"], ["Best for", "Photos, realistic images", "Logos, diagrams, fonts"], ["Formats", "BMP, JPG, PNG, GIF", "SVG, AI, EPS"]] } },
    { heading: "Lossy vs. lossless compression", points: [
      "Lossless: no data lost; original can be reconstructed exactly. Lower compression ratio. Examples: PNG, GIF, ZIP, FLAC, RLE.",
      "Lossy: permanently removes data the eye/ear is unlikely to notice. Much smaller files, some quality loss. Examples: JPEG, MP3, MP4.",
    ]},
    { heading: "Run-Length Encoding (RLE) calculations", points: [
      "RLE replaces runs of repeated values with a count + value pair. It is lossless.",
      "Example: AAAAABBBCCCCCCD → 5A3B6C1D. Original = 15 characters, compressed = 8 characters.",
      "Compression ratio = original size ÷ compressed size = 15 ÷ 8 ≈ 1.88 : 1. Space saved = (15 − 8) ÷ 15 ≈ 46.7%.",
      "Bitmap example: a row WWWWWWBBWWWW → 6W2B4W. Works best when there are long runs; can make files LARGER if data rarely repeats (e.g. ABCD → 1A1B1C1D).",
    ]},
    { heading: "Multimedia applications", points: [
      "Multimedia combines text, graphics, audio, video and animation, often with interactivity.",
      "Applications: education/e-learning and CBT, entertainment and games, business presentations and training, advertising, simulations & virtual reality, kiosks, websites, medicine.",
    ]},
    { heading: "Multimedia development: analysis, design, production", points: [
      "Analysis: define goals, target audience, content, budget and delivery platform.",
      "Design: create flowcharts, storyboards (sketches of each screen), and interface/navigation design.",
      "Production: create and acquire media elements (text, images, audio, video) and assemble them with authoring software; then test, evaluate and maintain.",
    ]},
    { heading: "Streaming vs. non-streaming", points: [
      "Streaming: audio/video is transmitted continuously and played as it arrives — no need to download the whole file first (e.g. YouTube, Spotify). Needs a stable connection; file not stored permanently.",
      "Non-streaming (download): the entire file must be downloaded before playback; can be played offline later but requires waiting and storage space.",
    ]},
  ]},
  { slug: "security-society", papers: "Q5", blocks: [
    { heading: "Cybercrime perpetrators", points: [
      "Hacker: someone who accesses a computer or network illegally; some claim it is to improve security.",
      "Cracker: accesses a computer or network illegally with malicious intent — to destroy data, steal information.",
      "Script kiddie: same intent as a cracker but lacks technical skill; uses prewritten hacking/cracking programs.",
      "Others: corporate spy (hired to break into a competitor's computers), unethical employee, cyberextortionist (demands money), cyberterrorist (attacks for political reasons).",
    ]},
    { heading: "Safeguards against attacks & malware", points: [
      "Malware types: virus, worm, trojan horse, rootkit, spyware, adware, ransomware, keylogger. Attacks: botnet, DoS/DDoS, back door, spoofing.",
      "Safeguards: install and update antivirus & anti-malware; use a firewall; keep OS and apps updated; do not open unknown email attachments; download only from trusted sources; back up regularly; use strong passwords; enable intrusion detection; use proxy servers.",
    ]},
    { heading: "Two-step verification", points: [
      "Two-step verification requires two separate methods to authenticate: e.g. password + a code sent to your phone (or an authenticator app).",
      "Even if the password is stolen, an attacker cannot log in without the second factor — greatly improves security for email, banking and ATMs.",
    ]},
    { heading: "Unauthorized data collection", points: [
      "Cookies: small text files websites store on your computer that track preferences and browsing.",
      "Spyware: secretly collects information about the user and sends it to an outside source. Adware: displays ads and may track behaviour.",
      "Others: web bugs/tracking pixels, phishing (fake emails/sites to steal data), pharming (redirecting to fake sites), clickjacking, social engineering, keyloggers.",
    ]},
    { heading: "Selective backup vs. Continuous Data Protection", points: [
      "Full backup: copies all files. Differential: files changed since last full. Incremental: files changed since last backup.",
      "Selective backup: user chooses specific files/folders to back up — faster and uses less space, but unselected files are unprotected.",
      "Continuous data protection (CDP): every change is backed up automatically as it happens — restore to any point in time; very expensive, used by businesses with critical data.",
    ]},
  ]},
];

export function getImportantNotes(slug: string): ImportantUnit | undefined {
  return importantNotes.find((u) => u.slug === slug);
}
