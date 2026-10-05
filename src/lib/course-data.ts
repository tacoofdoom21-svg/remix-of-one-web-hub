export type CourseSection = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  keyTerms?: Array<{ term: string; definition: string }>;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type CourseUnit = {
  number: string;
  slug: string;
  shortTitle: string;
  title: string;
  source: string;
  accent: "volt" | "cyan" | "mag";
  description: string;
  objectives: string[];
  sections: CourseSection[];
  quiz: QuizQuestion[];
};

export const courseUnits: CourseUnit[] = [
  {
    number: "01",
    slug: "hardware-cpu",
    shortTitle: "Hardware & CPU",
    title: "Hardware, Processors & Memory",
    source: "Topic1_CPU.pptx",
    accent: "volt",
    description: "Explore the components inside a computer, how processors execute instructions, and how data is represented and held in memory.",
    objectives: ["Identify core hardware components", "Explain the machine cycle", "Compare volatile and nonvolatile memory"],
    sections: [
      { id: "inside", title: "Inside the case", summary: "The case protects the motherboard, processor, memory, storage, power supply, and adapter cards.", details: ["The motherboard is the main circuit board. Components connect through sockets, slots, ports, and buses.", "A computer chip is a small piece of semiconducting material, usually silicon, containing integrated circuits."], keyTerms: [{ term: "Motherboard", definition: "The computer's main circuit board." }, { term: "Chip", definition: "A semiconductor containing integrated circuits." }] },
      { id: "processor", title: "Processor & machine cycle", summary: "The CPU interprets instructions using a control unit and arithmetic logic unit (ALU).", details: ["For each instruction, the control unit fetches data from memory, decodes it, the ALU executes the operation, and the result is stored.", "Multi-core processors place two or more processing cores on one chip. Clock speed is commonly measured in gigahertz."], keyTerms: [{ term: "Control unit", definition: "Directs and coordinates computer operations." }, { term: "ALU", definition: "Performs arithmetic, comparison, and logic operations." }] },
      { id: "data-memory", title: "Data representation & memory", summary: "Digital computers represent data with bits; eight bits form a byte that can represent one character.", details: ["RAM temporarily holds the operating system, applications, and data currently being processed.", "RAM is usually volatile. ROM, flash memory, and CMOS are nonvolatile. Cache speeds access to frequently needed data."], keyTerms: [{ term: "Bit", definition: "A binary digit: 0 or 1." }, { term: "Byte", definition: "A group of eight bits." }] },
      { id: "connections", title: "Adapters, buses & power", summary: "Adapters extend capabilities, buses carry signals, and power supplies convert electricity for components.", details: ["Expansion slots accept cards such as sound and video adapters; USB adapters connect through ports.", "Data and address buses move information. Word size describes how many bits a processor handles at once."] },
    ],
    quiz: [
      { question: "Which component performs arithmetic and comparison operations?", options: ["Control unit", "ALU", "Power supply", "ROM"], answer: 1, explanation: "The arithmetic logic unit performs arithmetic, comparison, and other logical operations." },
      { question: "What is the correct machine-cycle order?", options: ["Decode, fetch, store, execute", "Fetch, decode, execute, store", "Fetch, execute, decode, store", "Store, fetch, decode, execute"], answer: 1, explanation: "The processor fetches, decodes, executes, then stores each instruction's result." },
      { question: "Which memory normally loses its contents when power is removed?", options: ["ROM", "Flash memory", "RAM", "Firmware"], answer: 2, explanation: "Most RAM is volatile and requires power to retain its contents." },
    ],
  },
  {
    number: "02", slug: "input-output", shortTitle: "Input / Output", title: "Input & Output Devices", source: "Topic1_Input_Output.pptx", accent: "cyan",
    description: "Understand how people enter data, how computers present information, and how accessibility technologies bridge the two.",
    objectives: ["Classify common input methods", "Evaluate display and printer characteristics", "Recognize assistive technologies"],
    sections: [
      { id: "input", title: "Input methods", summary: "Input is data and instructions entered into computer memory.", details: ["Common methods include keyboards, pointing devices, touch, pen, motion, voice, video, scanners, and reading devices.", "Ergonomic keyboards aim to reduce repetitive strain while improving comfort and safety."], keyTerms: [{ term: "Input", definition: "Data and instructions entered into memory." }, { term: "Ergonomics", definition: "Design for comfort, efficiency, and safety." }] },
      { id: "pointing", title: "Pointing, touch & pen", summary: "Mice, touchpads, trackballs, touch screens, and pens translate physical action into selections.", details: ["A touchpad senses pressure and motion; a trackball stays stationary while its ball rotates.", "A graphics tablet converts stylus movement into signals for drawing and design work."] },
      { id: "capture", title: "Voice, video & scanning", summary: "Microphones, cameras, scanners, and readers digitize sound, images, marks, codes, and card data.", details: ["Voice recognition distinguishes spoken words. Webcams support recording, live broadcasting, video calls, and conferences.", "OCR recognizes printed characters; OMR recognizes marks; barcode, QR, RFID, and magnetic readers capture encoded data."] },
      { id: "output", title: "Displays, printers & audio", summary: "Output is processed data presented as text, graphics, audio, or video.", details: ["Display quality depends on resolution, response time, brightness, dot pitch, and contrast ratio.", "Printer choices include inkjet, laser, photo, all-in-one, 3D, thermal, mobile, label, plotter, and large-format devices."] },
    ],
    quiz: [
      { question: "Which technology recognizes printed characters in a scanned document?", options: ["OMR", "OCR", "RFID", "NFC"], answer: 1, explanation: "Optical character recognition converts printed characters into editable digital text." },
      { question: "What does display resolution describe?", options: ["Number of pixels", "Audio volume", "Print speed", "Storage capacity"], answer: 0, explanation: "Resolution describes the number of horizontal and vertical pixels a display uses." },
      { question: "Which device is stationary and uses a rotating ball?", options: ["Touchpad", "Stylus", "Trackball", "Scanner"], answer: 2, explanation: "A trackball remains stationary while the user rotates its ball." },
    ],
  },
  {
    number: "03", slug: "storage", shortTitle: "Storage Systems", title: "Digital Storage", source: "Topic1_Storage.pptx", accent: "cyan",
    description: "Compare storage media, capacity, performance, reliability, and the technologies used from personal devices to enterprises.",
    objectives: ["Distinguish storage from memory", "Compare HDDs and SSDs", "Explain cloud and enterprise storage"],
    sections: [
      { id: "fundamentals", title: "Storage fundamentals", summary: "Storage preserves data, programs, and information on nonvolatile media.", details: ["Reading transfers items from storage into memory; writing transfers them from memory to storage.", "Capacity ranges from kilobytes through megabytes, gigabytes, terabytes, and larger units. Access time measures how quickly an item can be located and delivered."], keyTerms: [{ term: "Storage medium", definition: "Physical material on which data is kept." }, { term: "Capacity", definition: "The number of bytes a medium can hold." }] },
      { id: "drives", title: "Hard disks & solid-state drives", summary: "HDDs use rotating magnetic platters; SSDs use flash memory with no moving parts.", details: ["Hard-disk performance depends on capacity, platters, form factor, read/write heads, and RPM.", "SSDs are generally faster, quieter, more durable, lighter, and do not require defragmentation."] },
      { id: "portable-cloud", title: "Portable & cloud storage", summary: "Memory cards, USB drives, external drives, and cloud services make data portable and accessible.", details: ["Flash memory cards come in formats such as SD, SDHC, SDXC, miniSD, and microSD.", "Cloud storage keeps files on Internet-connected servers while hiding the physical media from the user."] },
      { id: "enterprise", title: "Optical & enterprise storage", summary: "Optical discs use lasers; enterprise systems improve capacity, sharing, and resilience.", details: ["CD, DVD, and Blu-ray formats differ in capacity and whether they are read-only, recordable, or rewritable.", "RAID, network-attached storage, storage area networks, and tape systems support business continuity and centralized access."] },
    ],
    quiz: [
      { question: "Which statement best distinguishes storage from most RAM?", options: ["Storage is volatile", "Storage is nonvolatile", "Storage only holds programs", "Storage cannot be rewritten"], answer: 1, explanation: "Storage normally retains its contents after power is removed." },
      { question: "Why is an SSD usually more durable than an HDD?", options: ["It has more platters", "It uses larger sectors", "It has no moving parts", "It requires defragmentation"], answer: 2, explanation: "SSDs store data electronically in flash memory and contain no moving read/write mechanism." },
      { question: "What does RAID primarily improve?", options: ["Screen resolution", "Data reliability", "Clock speed", "Print quality"], answer: 1, explanation: "RAID duplicates or distributes data across drives to improve reliability and sometimes performance." },
    ],
  },
  {
    number: "04", slug: "applications", shortTitle: "Application Software", title: "Programs & Applications", source: "Topic2_Application.pptx", accent: "cyan",
    description: "Learn how applications support productivity, creativity, communication, security, and system maintenance.",
    objectives: ["Differentiate software categories", "Identify productivity and media tools", "Recognize security and management utilities"],
    sections: [
      { id: "software", title: "Programs, apps & distribution", summary: "Software is organized instructions; applications help users complete productive or personal tasks.", details: ["The operating system coordinates hardware and provides services to applications.", "Software may be native, cloud-based, web-based, or mobile web software and distributed as retail, custom, shareware, freeware, open source, or public domain."], keyTerms: [{ term: "Application", definition: "Software designed to help users perform tasks." }, { term: "System software", definition: "Programs that operate and maintain the computer." }] },
      { id: "productivity", title: "Productivity applications", summary: "Productivity tools help people create, organize, calculate, schedule, and manage work.", details: ["Major categories include word processing, presentation, spreadsheet, database, note-taking, calendar, project management, and accounting.", "Typical workflows involve creating, editing, formatting, saving, and distributing a project."] },
      { id: "creative", title: "Graphics, media & personal apps", summary: "Creative software supports CAD, images, photos, websites, audio, video, and immersive experiences.", details: ["Personal-interest apps cover lifestyle, medicine, entertainment, convenience, and education.", "Communications apps include browsers, email, chat, messaging, file transfer, Internet calls, and videoconferencing."] },
      { id: "utilities", title: "Security & management tools", summary: "Utilities protect systems and maintain files, disks, and performance.", details: ["Security tools include firewalls, antivirus, spyware and adware removal, anti-spam, web filters, phishing filters, and pop-up blockers.", "Management tools include file managers, search, image viewers, uninstallers, cleanup, backup, compression, and maintenance utilities."] },
    ],
    quiz: [
      { question: "Which application is designed to plan schedules, resources, and costs?", options: ["Word processor", "Project management software", "Image viewer", "Web filter"], answer: 1, explanation: "Project management software plans, schedules, tracks, and analyzes project resources and costs." },
      { question: "Which distribution model allows source code to be inspected and modified?", options: ["Retail", "Shareware", "Open source", "Custom only"], answer: 2, explanation: "Open-source software provides its source code under a license that permits inspection and modification." },
      { question: "Which tool removes unnecessary files?", options: ["Disk cleanup", "Presentation software", "CAD", "Videoconferencing"], answer: 0, explanation: "A disk cleanup utility searches for and removes files that are no longer needed." },
    ],
  },
  {
    number: "05", slug: "operating-systems", shortTitle: "Operating Systems", title: "Operating Systems", source: "Topic2_System.pptx", accent: "mag",
    description: "See how operating systems start devices, provide interfaces, manage resources, coordinate tasks, and enforce security.",
    objectives: ["Explain core OS functions", "Compare interfaces and power states", "Recognize desktop, server, and mobile systems"],
    sections: [
      { id: "functions", title: "Core operating-system functions", summary: "An OS starts and shuts down the device, provides an interface, and manages programs, memory, devices, files, networking, and security.", details: ["Sleep keeps documents and programs in RAM while reducing power use; hibernate writes the current state to storage before power is removed.", "Updates fix defects, improve security, and add capabilities."], keyTerms: [{ term: "Operating system", definition: "Software that coordinates hardware and application activity." }, { term: "Driver", definition: "A program that lets the OS communicate with a device." }] },
      { id: "interface-programs", title: "Interfaces & program management", summary: "GUIs use visual controls, while command-line interfaces require typed commands.", details: ["Operating systems support single or multitasking, foreground and background processing, and single or multiple users.", "Spooling holds print jobs in a buffer so the processor and printer can work efficiently."] },
      { id: "memory-devices", title: "Memory, devices & performance", summary: "The OS allocates memory, schedules tasks, configures devices, and monitors system health.", details: ["Virtual memory uses part of a storage device as additional RAM, swapping data in and out as needed.", "Plug and Play detects and configures newly connected hardware; monitoring tools display resource usage."] },
      { id: "types", title: "Desktop, server & mobile systems", summary: "Operating systems are optimized for personal computers, servers, or mobile devices.", details: ["Desktop examples include Windows, macOS, UNIX, Linux, and Chrome OS.", "Server systems prioritize shared services and administration; mobile systems such as Android and iOS target touch-based portable devices."] },
    ],
    quiz: [
      { question: "Which power mode saves open work to storage before removing power?", options: ["Sleep", "Hibernate", "Restart", "Log out"], answer: 1, explanation: "Hibernate saves the current state to a drive, then removes power." },
      { question: "What is virtual memory?", options: ["A cloud account", "Storage used as extra RAM", "A second processor", "Permanent ROM"], answer: 1, explanation: "Virtual memory temporarily uses storage capacity to extend available RAM." },
      { question: "What tells an operating system how to communicate with hardware?", options: ["Driver", "Spreadsheet", "Firewall rule", "Compiler"], answer: 0, explanation: "A device driver translates between the operating system and a specific device." },
    ],
  },
  {
    number: "06", slug: "networks", shortTitle: "Networks", title: "Networks & Digital Communications", source: "Topic3_Network.pptx", accent: "mag",
    description: "Follow data across wired and wireless networks, from local devices and protocols to transmission media and Internet connections.",
    objectives: ["Differentiate network scopes and architectures", "Explain protocols and devices", "Compare physical and wireless media"],
    sections: [
      { id: "basics", title: "Communications & network types", summary: "Digital communication transfers data between sending and receiving devices through transmission media.", details: ["Networks enable communication and sharing of hardware, data, software, and financial transactions.", "LANs cover limited areas, MANs metropolitan areas, WANs large regions, and PANs an individual's workspace."], keyTerms: [{ term: "Network", definition: "Connected computers and devices that communicate and share resources." }, { term: "Latency", definition: "The time a signal takes to travel across a network." }] },
      { id: "architecture", title: "Architectures & protocols", summary: "Client/server networks centralize services; peer-to-peer devices share directly.", details: ["TCP/IP defines how messages are addressed and routed. Ethernet governs wired access, while Wi-Fi, LTE, Bluetooth, RFID, and NFC serve different wireless needs.", "Communications software establishes connections and manages data transmission."] },
      { id: "devices", title: "Communication lines & devices", summary: "Modems, access points, routers, hotspots, and network cards connect devices and move traffic.", details: ["Connection technologies include cable, DSL, fiber to the premises, T-carrier, and ATM lines.", "A router directs packets between networks; a wireless access point connects wireless devices to a network."] },
      { id: "media", title: "Transmission media", summary: "Signals travel through physical cables or wireless electromagnetic waves.", details: ["Physical media include twisted-pair, coaxial, and fiber-optic cable. Fiber offers high capacity and resistance to electrical interference.", "Wireless media include radio, microwave, cellular, infrared, satellite, and GPS signals."] },
    ],
    quiz: [
      { question: "Which network covers a limited area such as an office?", options: ["WAN", "MAN", "LAN", "PAN only"], answer: 2, explanation: "A local area network connects devices within a limited geographic area." },
      { question: "Which protocol defines how Internet messages are routed?", options: ["NFC", "TCP/IP", "RFID", "IrDA"], answer: 1, explanation: "TCP/IP defines addressing, routing, and delivery across interconnected networks." },
      { question: "Which medium carries data as pulses of light?", options: ["Twisted-pair", "Coaxial", "Fiber-optic", "Radio"], answer: 2, explanation: "Fiber-optic cable transmits signals as light through glass or plastic fibers." },
    ],
  },
  {
    number: "07", slug: "databases-development", shortTitle: "Databases & Sysdev", title: "Databases & System Development", source: "Topic4_Topic5.pptx", accent: "mag",
    description: "Organize data into useful information, work with database systems, and understand the phases used to develop information systems.",
    objectives: ["Explain data organization", "Identify DBMS functions", "Outline system-development phases"],
    sections: [
      { id: "data", title: "Data, information & organization", summary: "Data is unprocessed; information is organized, meaningful, and useful.", details: ["A database organizes data for access, retrieval, and use. Data is structured as characters, fields, records, and files.", "Validation techniques include range, completeness, consistency, and check-digit tests."], keyTerms: [{ term: "Field", definition: "One or more related characters describing an attribute." }, { term: "Record", definition: "A group of related fields about one entity." }] },
      { id: "database", title: "Database approach & DBMS", summary: "A DBMS creates databases and lets users add, change, delete, sort, retrieve, secure, and report data.", details: ["The database approach reduces redundancy and improves sharing, integrity, access, and development time.", "DBMS features include a data dictionary, query tools, forms, report writers, access privileges, backup, logs, and recovery."] },
      { id: "types", title: "Database types & big data", summary: "Database structures and locations vary with the scale and relationships of the data.", details: ["Common categories include relational, object-oriented, multidimensional, web, distributed, and large-scale analytical databases.", "The principle of least privilege gives users only the access needed for their work."] },
      { id: "development", title: "System development", summary: "System development is a managed set of activities for building or changing an information system.", details: ["Work progresses through planning, analysis, design, implementation, and support/security, with documentation and user participation throughout.", "Teams evaluate operational, schedule, technical, and economic feasibility and gather information through observation, surveys, interviews, workshops, and research."] },
    ],
    quiz: [
      { question: "What is processed data called?", options: ["A field", "Information", "A character", "A query"], answer: 1, explanation: "Information is data that has been organized into a meaningful and useful form." },
      { question: "Which DBMS feature describes the structure of stored data?", options: ["Data dictionary", "Printer queue", "Firewall", "Device driver"], answer: 0, explanation: "A data dictionary stores definitions and characteristics of database fields and structures." },
      { question: "Which activity belongs to system analysis?", options: ["Discard all documentation", "Determine user requirements", "Ignore feasibility", "Remove user involvement"], answer: 1, explanation: "Analysis identifies users' wants, needs, and requirements before recommending a solution." },
    ],
  },
  {
    number: "08", slug: "graphics-multimedia", shortTitle: "Graphics & Media", title: "Graphics & Multimedia", source: "Topic6_Graphics.pdf", accent: "volt",
    description: "Study multimedia elements, image types, compression, audio and video formats, animation, and immersive applications.",
    objectives: ["Define multimedia elements", "Compare bitmap and vector graphics", "Explain audio, video, and multimedia applications"],
    sections: [
      { id: "elements", title: "Multimedia elements", summary: "Multimedia combines at least two of text, graphics, animation, audio, and video.", details: ["Interactive multimedia accepts user input and responds with an action.", "Sans-serif type is often preferred on screens for readability; graphics represent non-text information such as drawings, charts, and photographs."], keyTerms: [{ term: "Multimedia", definition: "A computer-based presentation combining multiple media elements." }, { term: "Interactive multimedia", definition: "Multimedia that responds to user input." }] },
      { id: "graphics", title: "Bitmap & vector graphics", summary: "Bitmaps store colored pixels in a grid; vectors store mathematical points, paths, lines, and fills.", details: ["Bitmaps suit photographs but become blocky when enlarged beyond their original resolution.", "Vectors are compact and can be resized, recolored, and reshaped without losing sharpness, making them ideal for logos, diagrams, and illustration."] },
      { id: "compression", title: "Color & compression", summary: "Color depth affects available colors, while compression reduces file size.", details: ["Lossy compression discards detail and suits continuous-tone photographs; JPEG is a common example.", "Lossless compression preserves image data and suits graphics with flat colors and lines; GIF and PNG use lossless methods."] },
      { id: "audio-video", title: "Animation, audio & video", summary: "Animation simulates motion with frames; digital audio samples sound waves; digital video records frames over time.", details: ["Audio quality and size are influenced by sampling rate, bit depth, channels, and compression. MIDI stores performance instructions rather than sound waves.", "Video compression reduces large frame sequences. Multimedia supports training, simulations, virtual reality, communication, and entertainment."] },
    ],
    quiz: [
      { question: "Which graphic type can be enlarged without becoming pixelated?", options: ["Bitmap", "Vector", "JPEG only", "Scanned photo"], answer: 1, explanation: "Vector graphics redraw mathematical paths at any size, preserving sharp edges." },
      { question: "Which format commonly uses lossy compression for photographs?", options: ["PNG", "GIF", "JPEG", "MIDI"], answer: 2, explanation: "JPEG discards less noticeable visual detail to achieve smaller photographic files." },
      { question: "What does MIDI primarily store?", options: ["Full sound waves", "Musical performance instructions", "Video frames", "Bitmap pixels"], answer: 1, explanation: "MIDI describes notes, instruments, timing, and performance rather than sampled sound." },
    ],
  },
  {
    number: "09", slug: "security-society", shortTitle: "Security & Ethics", title: "Digital Security, Ethics & Privacy", source: "Topic7_Computer_and_Society.pptx", accent: "volt",
    description: "Recognize digital threats, apply safeguards, protect information, and make responsible decisions about technology and privacy.",
    objectives: ["Identify security risks and attacks", "Explain access and information safeguards", "Discuss ethics, privacy, and green computing"],
    sections: [
      { id: "risks", title: "Digital security risks", summary: "A digital security risk can damage hardware, software, data, information, or processing capability.", details: ["Threat actors include hackers, crackers, script kiddies, corporate spies, unethical employees, cyberextortionists, and cyberterrorists.", "Risks include unauthorized access, intercepted communication, information theft, hardware theft, software theft, and system failure."], keyTerms: [{ term: "Cybercrime", definition: "An Internet-based illegal act." }, { term: "Malware", definition: "Software that acts without consent to disrupt or compromise devices." }] },
      { id: "attacks", title: "Malware & network attacks", summary: "Malware includes adware, ransomware, rootkits, spyware, trojans, viruses, and worms.", details: ["Botnets coordinate compromised devices. DoS and DDoS attacks disrupt service; back doors bypass controls; spoofing makes transmissions look legitimate.", "Firewalls, anti-malware tools, updates, careful downloads, and secure networks reduce exposure."] },
      { id: "access", title: "Access, software & information protection", summary: "Authentication and encryption protect systems and information from unauthorized use.", details: ["Passwords, biometrics, two-step authentication, and access controls verify identity and limit privileges.", "Encryption makes information unreadable without a key; digital signatures and certificates support integrity, identity, and trust. Licensing and activation discourage software piracy."] },
      { id: "ethics-privacy", title: "Backup, ethics & privacy", summary: "Backups support recovery, while ethical and privacy practices guide responsible technology use.", details: ["Backup strategies include full, differential, incremental, and continuous methods, stored locally, off-site, or in cloud services.", "Key issues include information accuracy, intellectual property, codes of conduct, green computing, tracking, identity theft, and responsible handling of personal data."] },
    ],
    quiz: [
      { question: "Which malware blocks access until payment is made?", options: ["Adware", "Ransomware", "Worm", "Firewall"], answer: 1, explanation: "Ransomware restricts access to a device or files and demands payment." },
      { question: "What does encryption do?", options: ["Deletes all data", "Makes data unreadable without a key", "Speeds up a CPU", "Creates a backup automatically"], answer: 1, explanation: "Encryption transforms readable data into an encoded form that requires a key to interpret." },
      { question: "Which safeguard adds a second proof of identity?", options: ["Two-step authentication", "Defragmentation", "Compression", "Public Wi-Fi"], answer: 0, explanation: "Two-step authentication combines two verification methods, reducing the impact of a stolen password." },
    ],
  },
];

export const getUnit = (slug: string) => courseUnits.find((unit) => unit.slug === slug);

export type SearchResult = { unit: CourseUnit; section?: CourseSection; excerpt: string };

export function searchCourse(query: string): SearchResult[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return courseUnits.flatMap((unit) => {
    const results: SearchResult[] = [];
    const unitText = `${unit.title} ${unit.description} ${unit.objectives.join(" ")}`.toLowerCase();
    if (unitText.includes(normalized)) results.push({ unit, excerpt: unit.description });
    unit.sections.forEach((section) => {
      const text = `${section.title} ${section.summary} ${section.details.join(" ")} ${(section.keyTerms ?? []).map((item) => `${item.term} ${item.definition}`).join(" ")}`.toLowerCase();
      if (text.includes(normalized)) results.push({ unit, section, excerpt: section.summary });
    });
    return results;
  }).slice(0, 12);
}