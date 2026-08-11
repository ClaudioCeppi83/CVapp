/* ==========================================================================
   MAIN JAVASCRIPT ENGINE - DUAL PERSONA ARCHITECTURE
   Claudio Ceppi: Hospitality & Floor Manager ⟷ Frontend & Software Developer
   ========================================================================== */

/* Detección de accesibilidad motriz */
const prefers_reduced_motion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Inicialización de animaciones de scroll (AOS) */
if (typeof AOS !== 'undefined') {
	AOS.init({
		once: true,
		mirror: false,
		disable: () => prefers_reduced_motion
	});
}

/* ==========================================================================
   GESTIÓN DEL PRELOADER
   ========================================================================== */
window.addEventListener('load', () => {
	const preloader = document.getElementById('preloader');
	if (!preloader) return;

	if (prefers_reduced_motion) {
		preloader.style.display = 'none';
		preloader.setAttribute('aria-hidden', 'true');
	} else {
		preloader.style.opacity = '0';
		setTimeout(() => {
			preloader.style.display = 'none';
			preloader.setAttribute('aria-hidden', 'true');
		}, 600);
	}
});

/* ==========================================================================
   SISTEMA DE TEMA (CLARO / OSCURO)
   ========================================================================== */
function init_theme() {
	const saved_theme = localStorage.getItem('theme');
	const system_dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const is_dark = saved_theme === 'dark' || (!saved_theme && system_dark);
	apply_theme(is_dark);
}

function apply_theme(is_dark) {
	const root = document.documentElement;
	const icon = document.getElementById('theme-icon');
	const toggle_btn = document.getElementById('theme-toggle');
	const current_lang = root.lang || 'es';
	const dict = lang_data[current_lang] || lang_data.es;

	if (is_dark) {
		root.classList.add('dark');
		if (icon) icon.className = "fa-solid fa-sun text-lg";
		if (toggle_btn) toggle_btn.setAttribute('aria-label', dict.aria_theme_toggle_dark);
	} else {
		root.classList.remove('dark');
		if (icon) icon.className = "fa-solid fa-moon text-lg";
		if (toggle_btn) toggle_btn.setAttribute('aria-label', dict.aria_theme_toggle_light);
	}
}

function toggle_theme() {
	const root = document.documentElement;
	const is_dark = root.classList.contains('dark');
	const new_theme_is_dark = !is_dark;
	localStorage.setItem('theme', new_theme_is_dark ? 'dark' : 'light');
	apply_theme(new_theme_is_dark);
}

/* ==========================================================================
   MOTOR DUAL PERSONA (HOSPITALITY ⟷ DEVELOPER)
   ========================================================================== */
function switch_persona(persona, update_url = true) {
	if (persona !== 'hospitality' && persona !== 'developer') {
		persona = 'hospitality';
	}

	const root = document.documentElement;
	root.setAttribute('data-persona', persona);
	localStorage.setItem('active_persona', persona);

	if (update_url && window.history && window.history.replaceState) {
		const url = new URL(window.location.href);
		url.searchParams.set('mode', persona);
		window.history.replaceState({}, '', url.toString());
	}

	/* Actualizar botones del switcher */
	const btn_hosp = document.getElementById('btn-persona-hosp');
	const btn_dev = document.getElementById('btn-persona-dev');
	const is_hosp = persona === 'hospitality';

	if (btn_hosp && btn_dev) {
		btn_hosp.setAttribute('aria-pressed', is_hosp ? 'true' : 'false');
		btn_dev.setAttribute('aria-pressed', !is_hosp ? 'true' : 'false');

		if (is_hosp) {
			btn_hosp.className = "px-3.5 py-1.5 rounded-full bg-brand-gold text-brand-dark font-medium transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none flex items-center gap-1.5 text-xs";
			btn_dev.className = "px-3.5 py-1.5 rounded-full text-brand-text-secondary hover:text-brand-text-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none flex items-center gap-1.5 text-xs";
		} else {
			btn_dev.className = "px-3.5 py-1.5 rounded-full bg-tech-cyan text-tech-dark font-medium transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-tech-cyan focus-visible:outline-none flex items-center gap-1.5 text-xs font-mono";
			btn_hosp.className = "px-3.5 py-1.5 rounded-full text-brand-text-secondary hover:text-brand-text-primary transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none flex items-center gap-1.5 text-xs";
		}
	}

	/* Actualizar título del documento */
	const current_lang = root.lang || 'es';
	const data = lang_data[current_lang] || lang_data.es;
	document.title = is_hosp ? data.meta_title_hospitality : data.meta_title_developer;

	const meta_desc = document.querySelector('meta[name="description"]');
	if (meta_desc) {
		meta_desc.setAttribute('content', is_hosp ? data.meta_desc_hospitality : data.meta_desc_developer);
	}
}

/* ==========================================================================
   MOTOR DE INTERNACIONALIZACIÓN (ES / EN)
   ========================================================================== */
function switch_language(lang) {
	if (lang !== 'es' && lang !== 'en') lang = 'es';

	const data = lang_data[lang];
	if (!data) return;

	localStorage.setItem('cv_lang', lang);
	document.documentElement.lang = lang;

	/* 1. Traducir elementos por data-i18n */
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.getAttribute('data-i18n');
		if (data[key]) {
			if (key.includes('headline') || key.includes('manifesto') || key.includes('desc') || key.includes('p1') || key.includes('p2')) {
				el.innerHTML = data[key];
			} else {
				el.textContent = data[key];
			}
		}
	});

	/* 2. Traducir atributos aria-label */
	document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
		const key = el.getAttribute('data-i18n-aria');
		if (data[key]) el.setAttribute('aria-label', data[key]);
	});

	/* 3. Traducir atributos alt */
	document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
		const key = el.getAttribute('data-i18n-alt');
		if (data[key]) el.setAttribute('alt', data[key]);
	});

	/* 4. Actualizar título según persona activa */
	const current_persona = document.documentElement.getAttribute('data-persona') || 'hospitality';
	document.title = current_persona === 'hospitality' ? data.meta_title_hospitality : data.meta_title_developer;

	/* 5. Actualizar botones del selector de idioma */
	const btn_es = document.getElementById('btn-es');
	const btn_en = document.getElementById('btn-en');
	const is_es = lang === 'es';

	if (btn_es && btn_en) {
		btn_es.setAttribute('aria-pressed', is_es ? 'true' : 'false');
		btn_en.setAttribute('aria-pressed', !is_es ? 'true' : 'false');

		btn_es.classList.toggle('bg-brand-gold', is_es);
		btn_es.classList.toggle('text-brand-dark', is_es);
		btn_es.classList.toggle('text-brand-text-secondary', !is_es);

		btn_en.classList.toggle('bg-brand-gold', !is_es);
		btn_en.classList.toggle('text-brand-dark', !is_es);
		btn_en.classList.toggle('text-brand-text-secondary', is_es);
	}
}

/* ==========================================================================
   EXPORTACIÓN DE CV EN PDF / IMPRESIÓN
   ========================================================================== */
function export_cv_pdf() {
	const persona = document.documentElement.getAttribute('data-persona') || 'hospitality';
	const lang = document.documentElement.lang || 'es';
	const original_title = document.title;

	/* Nombre de archivo optimizado para diálogo de guardado */
	const file_name = `CV_Claudio_Ceppi_${persona.toUpperCase()}_${lang.toUpperCase()}`;
	document.title = file_name;

	window.print();

	setTimeout(() => {
		document.title = original_title;
	}, 1000);
}

/* ==========================================================================
   MENÚ MÓVIL ACCESIBLE
   ========================================================================== */
function toggle_menu() {
	const menu = document.getElementById('mobile-menu');
	const toggle_btn = document.getElementById('menu-toggle');
	if (!menu || !toggle_btn) return;

	const is_expanded = toggle_btn.getAttribute('aria-expanded') === 'true';
	const will_expand = !is_expanded;

	menu.classList.toggle('hidden', !will_expand);
	toggle_btn.setAttribute('aria-expanded', will_expand.toString());

	const icon = toggle_btn.querySelector('i');
	if (icon) {
		icon.className = will_expand ? "fa-solid fa-xmark text-xl" : "fa-solid fa-bars text-xl";
	}
}

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const menu = document.getElementById('mobile-menu');
		const toggle_btn = document.getElementById('menu-toggle');
		if (menu && !menu.classList.contains('hidden')) {
			menu.classList.add('hidden');
			if (toggle_btn) {
				toggle_btn.setAttribute('aria-expanded', 'false');
				const icon = toggle_btn.querySelector('i');
				if (icon) icon.className = "fa-solid fa-bars text-xl";
				toggle_btn.focus();
			}
		}
	}
});

/* ==========================================================================
   GESTIÓN DEL FORMULARIO DE CONTACTO
   ========================================================================== */
function handle_contact_form(event) {
	event.preventDefault();
	const lang = document.documentElement.lang || 'es';
	const dict = lang_data[lang] || lang_data.es;
	alert(dict.form_alert_success);
	event.target.reset();
}

/* ==========================================================================
   INICIALIZACIÓN AL CARGAR EL DOM
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
	init_theme();

	/* Detectar persona inicial desde URL o localStorage */
	const url_params = new URLSearchParams(window.location.search);
	const mode_from_url = url_params.get('mode');
	const saved_persona = mode_from_url || localStorage.getItem('active_persona') || 'hospitality';
	switch_persona(saved_persona, false);

	/* Detectar idioma inicial */
	const saved_lang = localStorage.getItem('cv_lang') || 
		(navigator.language.startsWith('es') ? 'es' : 'en');
	switch_language(saved_lang);

	/* Event listeners de botones principales */
	const menu_toggle = document.getElementById('menu-toggle');
	if (menu_toggle) menu_toggle.addEventListener('click', toggle_menu);

	const theme_toggle = document.getElementById('theme-toggle');
	if (theme_toggle) theme_toggle.addEventListener('click', toggle_theme);

	const export_btns = document.querySelectorAll('.btn-export-pdf');
	export_btns.forEach((btn) => btn.addEventListener('click', export_cv_pdf));

	const contact_form = document.getElementById('contact-form');
	if (contact_form) contact_form.addEventListener('submit', handle_contact_form);
});
