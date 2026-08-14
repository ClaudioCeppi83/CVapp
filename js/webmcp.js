/* ==========================================================================
   WEBMCP (Web Model Context Protocol) - CANONICAL AGENT INTERFACE
   Claudio Ceppi: Hospitality & Floor Manager (Primary) | Developer (Hobby)
   Standards: W3C Web Machine Learning CG / Chrome 149+ Origin Trials
   ========================================================================== */

(function () {
	'use strict';

	/**
	 * Base de datos estructurada canónica para agentes de IA
	 */
	const PROFILE_DATA = {
		hospitality: {
			name: "Claudio Ceppi",
			role: "Maître & Floor Manager",
			status: "Profesión Principal (10+ años de trayectoria)",
			location: "Murcia / Barcelona, España",
			contact: {
				phone: "+34 641 511 740",
				email: "erceppi@gmail.com",
				linkedin: "https://www.linkedin.com/in/claudioceppi/"
			},
			summary_es: "Especialista en dirección de sala y servicio al cliente de alto nivel, dedicado a garantizar experiencias gastronómicas memorables y optimizar las operaciones de alimentos y bebidas.",
			summary_en: "Results-driven hospitality professional dedicated to ensuring outstanding guest dining experiences and optimizing food & beverage operations.",
			core_competencies: [
				"Gestión de Sala & Floor Management",
				"Arqueos de Caja de Alta Precisión & Conciliaciones",
				"Control de Stock, Inventarios & Mermas",
				"Enología, Sumillería, Coctelería & Protocolo",
				"Liderazgo de Equipos, Formación & Dinámicas de Sala",
				"Cumplimiento Higiénico-Sanitario & Normativa APPCC"
			],
			career_timeline: [
				{
					period: "OCT 2024 - ABR 2025",
					role: "Servicio al Cliente y Bartender",
					location: "Murcia, España"
				},
				{
					period: "SEP 2022 - FEB 2024",
					role: "Jefe de Sala / Manager",
					location: "Lima, Perú"
				},
				{
					period: "ABR 2021 - AGO 2022",
					role: "Representante de Servicio al Cliente",
					location: "Lima, Perú"
				},
				{
					period: "MAR 2017 - MAR 2020",
					role: "Store Manager / Gerente de Tienda",
					location: "Lima, Perú"
				}
			],
			education: [
				{
					degree: "Profesional en Negocios Gastronómicos",
					institution: "Instituto Gastronómico Cuisine Art, Venezuela"
				},
				{
					degree: "Curso de Hostelería y Protocolo",
					institution: "Eh! Escuela de Hostelería | Cáritas (Murcia, España)"
				}
			],
			languages: {
				spanish: "Nativo",
				english: "EF SET C1 (68/100) — Profesional"
			}
		},
		developer: {
			name: "Claudio Ceppi",
			role: "Creador Digital & Aficionado al Desarrollo Web",
			status: "Afición Creativa & Pasión Paralela (10+ proyectos en producción)",
			approach: "Desarrollo autodidacta asistido por Inteligencia Artificial — de la idea a producción",
			github: "https://github.com/ClaudioCeppi83",
			portfolio_url: "https://claudio-ceppi.web.app",
			summary_es: "Hostelero de profesión y creador digital por pasión. En mi tiempo libre desarrollo proyectos web y herramientas digitales con IA.",
			summary_en: "Hospitality professional by trade, tech enthusiast by passion. Building production web projects and digital utilities in spare time.",
			stack: {
				frontend: ["React 18", "TypeScript", "Tailwind CSS v4", "HTML5 Semántico", "Vanilla JS (ES6+)", "PWA / Service Workers", "GSAP"],
				backend_cloud: ["Python 3", "Node.js", "Express", "Firebase Hosting", "Cloud Functions v2", "Cloud Firestore", "Vision API"],
				mobile_desktop: ["Flutter 3", "Dart", "Google Maps SDK", "PyGObject (GTK3)", "Debian Packaging"],
				testing_qa: ["Playwright E2E", "Python unittest / Pytest", "Flutter test"]
			}
		}
	};

	/**
	 * Catálogo canónico de los 10 proyectos en producción
	 */
	const PROJECTS_CATALOG = [
		{
			id: "logistica-saas",
			name: "Logística SaaS Badalona",
			category: "pwa",
			type: "Logística B2B / PWA Offline-First",
			stack: ["React 18", "TypeScript", "Google Cloud Vision OCR", "Firebase Hosting", "Cloud Functions v2", "IndexedDB", "Playwright"],
			status: "En Producción",
			live_url: "https://logistica-saas.web.app",
			github_url: "https://github.com/ClaudioCeppi83/logistica-saas",
			highlights: ["Escáner WebRTC con OCR Vision API", "Cola de resiliencia IndexedDB offline-first", "Suite 3/3 tests Playwright E2E"]
		},
		{
			id: "mau-landing",
			name: "Mau Ceppi // Funktaxi 1533 (NYC)",
			category: "web",
			type: "Dark Cyber-Editorial / Web",
			stack: ["HTML5", "CSS3", "GSAP 3.12", "Google Cloud Firestore", "Firebase Hosting", "Web Audio"],
			status: "En Producción",
			live_url: "https://mau-landing.web.app",
			highlights: ["Animaciones GSAP", "Captura de leads en Firestore", "Schema.org completo"]
		},
		{
			id: "chiara-coppola",
			name: "Chiara Coppola Atelier",
			category: "web",
			type: "Haute Couture Atelier / A11y",
			stack: ["HTML5", "CSS3", "Vanilla JS", "WCAG 2.1 AA", "WhatsApp API", "Firebase Hosting"],
			status: "En Producción",
			live_url: "https://chiara-coppola.web.app",
			highlights: ["Cumplimiento de accesibilidad WCAG 2.1 AA", "Captura de leads vía WhatsApp", "Diseño editorial"]
		},
		{
			id: "sabor-italia",
			name: "Italia: Sabor & Nostalgia",
			category: "web",
			type: "Recetario Fullstack / Cocina Italiana",
			stack: ["Node.js", "Express", "Google Cloud Firestore", "Tailwind CSS", "Vanilla JS", "Schema.org Recipe"],
			status: "En Producción",
			live_url: "https://sabor-italia.web.app",
			highlights: ["Capa de resiliencia híbrida transparente", "Motor de sustituciones saludables", "Marcado Schema.org Recipe"]
		},
		{
			id: "alesso-saludable",
			name: "D'Alesso — Cucina Pura",
			category: "web",
			type: "GastroTech Multilingüe / Menú Digital",
			stack: ["HTML5", "Tailwind CSS", "Vanilla JS (i18n)", "Schema.org", "Firebase Hosting"],
			status: "En Producción",
			live_url: "https://alesso-saludable.web.app",
			highlights: ["Soporte en 3 idiomas (ES/EN/IT)", "Bottom-sheet metabólico", "SEO internacional con hreflang"]
		},
		{
			id: "affiliate-saas",
			name: "GRADO — Espresso Authority",
			category: "web",
			type: "Motor Python / Portal Editorial Afiliados",
			stack: ["Python 3", "HTML5", "Schema.org ItemList", "Firebase Hosting", "Live Filters"],
			status: "En Producción",
			live_url: "https://grado-coffee.web.app",
			highlights: ["Generador estático CLI Python con 6 tests", "Filtros en tiempo real", "Avisos FTC de afiliación"]
		},
		{
			id: "expense-tracker-cli",
			name: "Expense Tracker CLI",
			category: "cli",
			type: "Python CLI & Web GUI",
			stack: ["Python 3", "argparse", "Fernet AES-128", "Rich UI", "unittest"],
			status: "Completado / Local CLI",
			github_url: "https://github.com/ClaudioCeppi83/expense-tracker-cli",
			highlights: ["14/14 tests unitarios automatizados", "Cifrado Fernet AES", "Comando global 'expense'"]
		},
		{
			id: "text-editor-core",
			name: "Text Editor Core (te)",
			category: "cli",
			type: "CLI TUI / Buffer Engine",
			stack: ["Python 3", "curses", "unittest", "OOP Architecture"],
			status: "Completado / Local CLI",
			github_url: "https://github.com/ClaudioCeppi83/text-editor-core",
			highlights: ["20/20 tests unitarios automatizados", "Motor de buffer 2D con undo/redo", "Comando global 'te'"]
		},
		{
			id: "geo-alarm",
			name: "Geo Alarm",
			category: "mobile",
			type: "Flutter Mobile / Google Maps",
			stack: ["Flutter 3.41", "Dart", "Google Maps SDK", "Geolocator", "Shared Preferences"],
			status: "Completado / APK Build",
			github_url: "https://github.com/ClaudioCeppi83/geo-alarm",
			highlights: ["11/11 tests unitarios SRE", "Geocercas GPS con histéresis", "Triple API fallback para geocoding"]
		},
		{
			id: "agente-resources-kpi",
			name: "Agente Resources KPI",
			category: "desktop",
			type: "Linux Desktop / GTK3 & Python",
			stack: ["Python 3", "GTK3", "AyatanaAppIndicator3", "Debian .deb", "unittest"],
			status: "Completado / Debian Package",
			github_url: "https://github.com/ClaudioCeppi83/agente-resources-kpi",
			highlights: ["7/7 tests unitarios automatizados", "Bandeja de sistema asíncrona GLib", "Instalador debian verificado"]
		}
	];

	/**
	 * Declaración de Tools de WebMCP
	 */
	const TOOLS_DEFINITIONS = [
		{
			name: "getProfile",
			description: "Returns verified professional profile of Claudio Ceppi. Defaults to 'hospitality' (primary career: Maître & Floor Manager with 10+ years). Use persona='developer' for creative hobby projects.",
			inputSchema: {
				type: "object",
				properties: {
					persona: {
						type: "string",
						enum: ["hospitality", "developer", "both"],
						default: "hospitality",
						description: "Professional profile requested. Default is 'hospitality'."
					},
					language: {
						type: "string",
						enum: ["es", "en"],
						default: "es",
						description: "Response language."
					}
				}
			},
			execute: async (args = {}) => {
				const persona = args.persona || "hospitality";
				let result;
				if (persona === "both") {
					result = PROFILE_DATA;
				} else {
					result = PROFILE_DATA[persona] || PROFILE_DATA.hospitality;
				}
				return {
					content: [{ type: "text", text: JSON.stringify(result, null, 2) }]
				};
			}
		},
		{
			name: "getProjects",
			description: "Returns the list of 10 software applications and projects developed by Claudio Ceppi. Filterable by category (web, mobile, cli, desktop, pwa) or technology keyword.",
			inputSchema: {
				type: "object",
				properties: {
					category: {
						type: "string",
						enum: ["all", "web", "mobile", "cli", "desktop", "pwa"],
						default: "all",
						description: "Category filter"
					},
					keyword: {
						type: "string",
						description: "Filter by technology (e.g. 'react', 'python', 'flutter', 'firebase', 'ocr')"
					}
				}
			},
			execute: async (args = {}) => {
				let filtered = [...PROJECTS_CATALOG];
				if (args.category && args.category !== "all") {
					filtered = filtered.filter(p => p.category === args.category);
				}
				if (args.keyword) {
					const kw = args.keyword.toLowerCase();
					filtered = filtered.filter(p =>
						p.name.toLowerCase().includes(kw) ||
						p.stack.some(s => s.toLowerCase().includes(kw)) ||
						p.type.toLowerCase().includes(kw)
					);
				}
				return {
					content: [{
						type: "text",
						text: JSON.stringify({
							total: filtered.length,
							projects: filtered
						}, null, 2)
					}]
				};
			}
		},
		{
			name: "getProjectDetails",
			description: "Retrieves complete technical details and URLs for a specific project by its ID.",
			inputSchema: {
				type: "object",
				properties: {
					projectId: {
						type: "string",
						description: "Project ID slug (e.g. 'logistica-saas', 'geo-alarm', 'sabor-italia', 'mau-landing')"
					}
				},
				required: ["projectId"]
			},
			execute: async (args = {}) => {
				const id = (args.projectId || "").toLowerCase();
				const project = PROJECTS_CATALOG.find(p => p.id === id);
				if (!project) {
					return {
						content: [{
							type: "text",
							text: JSON.stringify({
								error: "Project not found",
								available_ids: PROJECTS_CATALOG.map(p => p.id)
							}, null, 2)
						}]
					};
				}
				return {
					content: [{ type: "text", text: JSON.stringify(project, null, 2) }]
				};
			}
		},
		{
			name: "getSkills",
			description: "Returns competencies and skills for either Hospitality (Front-of-House management) or Developer (Web/Python/Flutter).",
			inputSchema: {
				type: "object",
				properties: {
					persona: {
						type: "string",
						enum: ["hospitality", "developer", "both"],
						default: "both"
					}
				}
			},
			execute: async (args = {}) => {
				const persona = args.persona || "both";
				const response = {};
				if (persona === "hospitality" || persona === "both") {
					response.hospitality_skills = PROFILE_DATA.hospitality.core_competencies;
				}
				if (persona === "developer" || persona === "both") {
					response.developer_skills = PROFILE_DATA.developer.stack;
				}
				return {
					content: [{ type: "text", text: JSON.stringify(response, null, 2) }]
				};
			}
		},
		{
			name: "getContact",
			description: "Returns official contact details, social channels and availability for Claudio Ceppi.",
			inputSchema: {
				type: "object",
				properties: {}
			},
			execute: async () => {
				return {
					content: [{
						type: "text",
						text: JSON.stringify({
							name: "Claudio Ceppi",
							location: "Murcia / Barcelona, España",
							phone: "+34 641 511 740",
							email: "erceppi@gmail.com",
							linkedin: "https://www.linkedin.com/in/claudioceppi/",
							github: "https://github.com/ClaudioCeppi83",
							website: "https://claudio-ceppi.web.app",
							primary_availability: "Gestión de Sala / Hospitality & Floor Management",
							secondary_availability: "Proyectos y colaboraciones digitales independientes"
						}, null, 2)
					}]
				};
			}
		},
		{
			name: "switchPersona",
			description: "Interactively switches the active visual persona on the website ('hospitality' or 'developer').",
			inputSchema: {
				type: "object",
				properties: {
					persona: {
						type: "string",
						enum: ["hospitality", "developer"],
						description: "The persona to switch to"
					}
				},
				required: ["persona"]
			},
			execute: async (args = {}) => {
				if (typeof window.switch_persona === "function") {
					window.switch_persona(args.persona);
					return {
						content: [{
							type: "text",
							text: `Successfully switched visual view to '${args.persona}'`
						}]
					};
				}
				return {
					content: [{ type: "text", text: "switch_persona function not available in DOM" }]
				};
			}
		}
	];

	/**
	 * Registro en WebMCP si el navegador soporta navigator.modelContext
	 */
	function init_webmcp() {
		if (typeof navigator !== 'undefined' && 'modelContext' in navigator) {
			try {
				TOOLS_DEFINITIONS.forEach(tool => {
					navigator.modelContext.registerTool({
						name: tool.name,
						description: tool.description,
						inputSchema: tool.inputSchema,
						execute: tool.execute
					});
				});
				console.log('[WebMCP] 6 native tools registered successfully into navigator.modelContext');
			} catch (err) {
				console.warn('[WebMCP] Registration failed:', err);
			}
		}

		/* Exponer interfaz global window.WebMCP para testing e inspección de agentes */
		window.WebMCP = {
			version: "1.0.0",
			status: "active",
			tools: TOOLS_DEFINITIONS,
			catalog: PROJECTS_CATALOG,
			profile: PROFILE_DATA,
			executeTool: async function (toolName, params) {
				const tool = TOOLS_DEFINITIONS.find(t => t.name === toolName);
				if (!tool) throw new Error(`Tool '${toolName}' not found`);
				return await tool.execute(params);
			}
		};
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init_webmcp);
	} else {
		init_webmcp();
	}
})();
