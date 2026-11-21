export const COMPANY = {
  name: "Flowton Manufacturing Private Limited",
  shortName: "Flowton",
  tagline: "Hydraulic engineering solutions",
  whatsappNumber: "917070653591",
  whatsappDisplay: "+91 70706 53591",
  whatsappContact: "Md Ehtesham Hasan",
  addressLine1: "Ward No. 19, Back Side Lal, Chakradharpur",
  addressLine2: "Chakradharpur, Seraikela-Kharsawan – 833102, Jharkhand, India",
  location: "Chakradharpur, Jharkhand",
  website: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};

export type ServiceSlug = "hydraulic-servicing" | "spare-parts" | "power-packs";

export type Service = {
  slug: ServiceSlug;
  number: string;
  eyebrow: string;
  name: string;
  shortTitle: string;
  strapline: string;
  summary: string;
  cardDescription: string;
  icon: "wrench" | "package" | "settings";
  deliverables: string[];
  needs: string[];
  situations: { title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  whatsappIntro: string;
};

export const services: Service[] = [
  {
    slug: "hydraulic-servicing", number: "01", eyebrow: "DIAGNOSE / RESTORE",
    name: "Hydraulic servicing & troubleshooting", shortTitle: "Servicing & troubleshooting",
    strapline: "Find the fault. Define the fix.",
    summary: "From pressure loss to unexpected breakdowns, we help assess hydraulic problems and coordinate practical service and repair work around your equipment.",
    cardDescription: "Fault diagnosis, maintenance and repair coordination for equipment that needs to work reliably.",
    icon: "wrench", deliverables: ["Hydraulic fault assessment", "Leakage and pressure-loss investigation", "Cylinder, pump and valve service coordination", "Maintenance, installation and commissioning support"],
    needs: ["Machine make, model and application", "A description of the fault and when it occurs", "Site location and urgency", "Photos, readings or hydraulic drawings if available"],
    situations: [
      {title:"Low pressure or weak force",copy:"The machine struggles to achieve operating pressure or required force."},
      {title:"Oil leaks and cylinder drift",copy:"Leaking hoses, fittings, seals or unstable cylinder movement."},
      {title:"Heat, noise or vibration",copy:"Changes in temperature, pump behaviour or sound that need investigation."},
      {title:"Slow or irregular cycles",copy:"Unexpected machine motion, inconsistent speed or repeated interruptions."}
    ],
    steps: [
      {title:"Describe the symptom",copy:"Share the equipment details, fault history and photos."},
      {title:"Review the system",copy:"We clarify operating conditions, evidence and likely assessment requirements."},
      {title:"Agree the scope",copy:"Feasibility, resources and the proposed service route are discussed before work."}
    ],
    faqs: [
      {q:"Can you attend any site for an emergency?",a:"Site visits and response arrangements depend on location, safety requirements, availability and the technical scope. Share your location and symptoms first so feasibility can be reviewed."},
      {q:"Can you diagnose a failure from a photo?",a:"Photos and nameplates help with initial assessment, but they do not always establish the root cause. Further checks may be required."},
      {q:"Do you replace hydraulic cylinders and pumps?",a:"Where feasible, Flowton can coordinate servicing, repair or replacement through suitable technical and supplier resources."}
    ],
    whatsappIntro:"Hello Flowton, I need help with hydraulic servicing / troubleshooting."
  },
  {
    slug: "spare-parts", number: "02", eyebrow: "IDENTIFY / SOURCE",
    name: "Hydraulic spare parts sourcing", shortTitle: "Spare parts sourcing",
    strapline: "The right part. For the right duty.",
    summary: "Need a specific hydraulic component? We help identify and source suitable parts against the machine, reference number and operating specification.",
    cardDescription: "Specification-led sourcing for pumps, valves, motors, cylinders, hoses, seals and more.",
    icon:"package", deliverables:["Pump and motor sourcing", "Directional, flow and pressure-control valves", "Cylinders, hoses, fittings and seals", "Specification matching and supplier coordination"],
    needs:["Part name, OEM number or model", "Nameplate photos and dimensions", "Operating pressure, flow and application", "Quantity and delivery location"],
    situations:[
      {title:"Hard-to-identify components",copy:"The part number is missing or the equipment is older."},
      {title:"Replacement pump or motor",copy:"A matching component is needed for the machine's operating conditions."},
      {title:"Valves, seals and fittings",copy:"You need compatible hydraulic control or sealing components."},
      {title:"Multiple-part requirements",copy:"A planned maintenance or equipment project needs coordinated sourcing."}
    ],
    steps:[
      {title:"Send the reference",copy:"Provide part numbers, nameplates or technical specifications."},
      {title:"Check compatibility",copy:"Review the required duty, configuration and replacement options."},
      {title:"Discuss supply",copy:"Confirm available sourcing paths, quantity and commercial details."}
    ],
    faqs:[
      {q:"Do you manufacture hydraulic pumps, valves or cylinders?",a:"Flowton does not claim to manufacture these components. Parts are sourced through suppliers and checked against the stated requirement."},
      {q:"Can you find a part without its model number?",a:"Sometimes. Clear component photos, dimensions, operating details and machine information can help identify suitable options. Compatibility must still be verified."},
      {q:"Can you provide a quote from a picture alone?",a:"A photo can help start the enquiry. Accurate pricing and selection may also require the nameplate, quantities and technical details."}
    ],
    whatsappIntro:"Hello Flowton, I want to source a hydraulic spare part."
  },
  {
    slug: "power-packs", number: "03", eyebrow: "DESIGN / INTEGRATE",
    name: "Hydraulic power pack engineering", shortTitle:"Power pack engineering",
    strapline:"The right power. Engineered for the task.",
    summary:"From application requirements to component selection, Flowton helps engineer hydraulic power-pack solutions and coordinate project-specific sourcing, assembly and supply.",
    cardDescription:"Application-led hydraulic power-pack design, component selection and project-based execution.",
    icon:"settings", deliverables:["Application and duty-cycle review", "Hydraulic circuit and component selection", "Power-pack engineering and supply planning", "Assembly, integration and commissioning coordination"],
    needs:["Application and equipment description", "Required force, pressure or load", "Stroke, speed and duty cycle", "Power availability, drawings and site constraints"],
    situations:[
      {title:"New equipment development",copy:"A machine requires a tailored source of hydraulic power."},
      {title:"System upgrades",copy:"An existing package needs re-scoping for a new operating requirement."},
      {title:"Presses and lifting equipment",copy:"Force, speed and operating cycle drive the selection."},
      {title:"Special-purpose machines",copy:"Hydraulic power is needed for a defined industrial application."}
    ],
    steps:[
      {title:"Share the application",copy:"Explain what the machine must move, lift, press or control."},
      {title:"Review engineering inputs",copy:"Clarify loads, pressure, flow, speed, duty and power requirements."},
      {title:"Scope the package",copy:"Discuss design direction, sourcing and the project delivery arrangement."}
    ],
    faqs:[
      {q:"Do you design custom hydraulic power packs?",a:"Flowton can review application-specific power-pack engineering requirements. Design, assembly and execution details are agreed based on technical feasibility and available project resources."},
      {q:"What details are needed to get started?",a:"Application, load or force, stroke, movement speed, duty cycle, electrical power availability and drawings are all useful."},
      {q:"Can you support installation and commissioning?",a:"Integration or commissioning support can be considered as part of the agreed project scope, depending on site access and available resources."}
    ],
    whatsappIntro:"Hello Flowton, I want to discuss a hydraulic power-pack project."
  }
];

export const industries = [
  {number:"01",name:"Manufacturing & machine tools",summary:"Presses, forming machinery and production-line hydraulic units.",detail:"Pressure loss, hydraulic drive faults, machine upgrades and replacement components."},
  {number:"02",name:"Plastics & moulding",summary:"Injection moulding and process machinery with hydraulic motion control.",detail:"Power-unit assessment, valve performance and spare-part requirements."},
  {number:"03",name:"Steel, mining & heavy plant",summary:"Industrial equipment operating under demanding service conditions.",detail:"Equipment-specific maintenance, critical spares and engineering review."},
  {number:"04",name:"Material handling & lifting",summary:"Hydraulic cranes, platforms, lifting tables and dock levellers.",detail:"Cylinder performance, power packs and lifting-system requirements."},
  {number:"05",name:"Construction & mobile equipment",summary:"Mobile machinery and equipment with hydraulic actuation.",detail:"Leakage, cylinder issues, pumps, motors and replacement-part sourcing."},
  {number:"06",name:"Recycling & waste processing",summary:"Compactors, balers, scrap shears and handling machinery.",detail:"Hydraulic package needs, performance faults and maintenance inputs."}
];

export const people = [
  {
    id:"ehtesham",name:"Md Ehtesham Hasan",role:"Technical Leadership · Website Enquiry Contact", image:"/images/ehtesham.webp",
    credential:"PhD, Mechanical Engineering · IIT (ISM) Dhanbad",
    bio:"Md Ehtesham Hasan leads technical conversations around Flowton's industrial hydraulic requirements. He earned a B.Tech in Mechanical Engineering from Asansol Engineering College in 2008, an M.Tech in Design & Production from NIT Durgapur and a PhD in Mechanical Engineering from IIT (ISM) Dhanbad. His research includes power hydraulics, and his industry background includes quality assurance at Tractors India Limited.",
    highlights:["PhD in Mechanical Engineering, IIT (ISM) Dhanbad", "M.Tech in Design & Production, NIT Durgapur", "Power-hydraulics research and industrial quality assurance"]
  },
  {
    id:"nazia",name:"Nazia Parveen",role:"Founder & Director", image:"/images/nazia.webp",credential:"BSc · DEE",
    bio:"Nazia Parveen provides strategic direction across business development, financial operations and long-term resilience. Alongside her executive responsibilities, she is active in equity-market investing, applying market analysis and financial discipline to evaluate opportunities in industrial, infrastructure and emerging-technology sectors. Her perspective helps Flowton pursue sustainable growth and prudent resource allocation.",
    highlights:["Business strategy and development", "Financial operations and capital discipline", "Industrial and infrastructure market perspective"]
  },
  {
    id:"ratan",name:"Ratan Biswakarma",role:"Director · Industrial Operations",image:"/images/ratan.webp",credential:"M.Tech, Design & Production · NIT Durgapur",
    bio:"Ratan Biswakarma is a mechanical engineer specialising in heavy manufacturing, metal processing, machining and plant execution. A B.Tech graduate of BCREC Durgapur with an M.Tech from NIT Durgapur, he has worked with Amit Alliances, Ispat Damodar, Jai Balaji Industries, Nipha Industries and TIL India. His background spans production planning, maintenance, QA, supply chains, SAP MM and Oracle ERP, with experience in plant-expansion projects and process improvement. Earlier R&D work at CSIR-CMERI included product design, simulation and component-indigenisation work for HAL.",
    highlights:["Heavy manufacturing and plant operations", "Production planning, machining and process improvement", "Industrial R&D, technical design and ERP systems"]
  },
  {
    id:"arquam",name:"Md Arquam Sayeed",role:"Business Development & Client Relationships",image:"/images/arquam.webp",credential:"Entrepreneurship · International Trade",
    bio:"Md Arquam Sayeed focuses on commercial opportunities, business development, international trade and client relationships. He is also building IndoWoven while gaining hands-on experience in market development and sales. At Flowton, he brings an entrepreneurial perspective to identifying customer needs, exploring new markets and building practical long-term relationships.",
    highlights:["Business development and client relationships", "International trade and market exploration", "Entrepreneurial growth and sales"]
  }
];

export const generalFaqs = [
  {q:"What does Flowton actually do?",a:"Flowton focuses on industrial hydraulic troubleshooting and service coordination, specification-led spare-part sourcing, and application-specific hydraulic power-pack engineering and supply."},
  {q:"Can Flowton help with a machine breakdown?",a:"Yes, you can send machine details and fault symptoms for review. Any on-site service or repair commitment depends on technical feasibility, site requirements and available resources."},
  {q:"Do you manufacture every hydraulic component yourself?",a:"No. Pumps, valves, cylinders and similar components are sourced through suitable suppliers. Power-pack assembly and execution are planned project by project."},
  {q:"How do I get a quote?",a:"Choose your requirement and send the key details over WhatsApp. For a useful review, include the machine or component reference, technical requirements, location and photos where available."}
];
