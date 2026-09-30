/* ==========================================================================
   Reza Tondfekr, Portfolio scripts
   - Case-study dialog
   - Optional micro-quests (XP saved in localStorage)
   - Theme toggle, mobile menu, active nav link
   ========================================================================== */

(function () {
    'use strict';

    /* ---------- Content ----------
       Edit case studies here. Each quest uses a real learning-science idea
       and gives explanatory feedback on every answer. */
    const projects = [
        {
            title: 'Victoria University',
            role: 'Senior Learning Designer',
            meta: 'Melbourne, VIC · Dec 2025 – Present',
            image: 'vu.svg',
            tldr: 'I help course teams redesign assessment so that it is authentic, sustainable, progressive and aligned with University standards and TEQSA requirements.',
            context: 'Assessment has to do a lot: evidence learning outcomes, build employability skills and meet University and regulatory standards. Through the Assessment Refresh Project (ARP), I work with unit teams to redesign assessment so that it does all of this well.',
            contributions: [
                'Partner with course teams and unit convenors to review and redesign unit assessments under the ARP.',
                'Map learning outcomes and employability skills, and document assessment architecture against VU Assessment Standards, TEQSA requirements and the ARP framework.',
                'Facilitate design workshops that build authentic, sustainable and progressive assessment practice.'
            ],
            approach: ['Constructive alignment', 'Outcome mapping', 'Authentic assessment', 'Employability skills mapping', 'Co-design workshops'],
            quest: {
                question: 'Which principle makes sure that learning outcomes, learning activities and assessment all point in the same direction?',
                options: ['Constructive alignment', 'Spaced repetition', 'Learning styles'],
                correct: 0,
                why: 'Constructive alignment (John Biggs) starts from what students should be able to do. Activities and assessment are then designed to develop and evidence exactly that.',
                hint: 'Think about the alignment between what we intend students to learn and how we check it.'
            }
        },
        {
            title: 'NeuroAIQ',
            role: 'AI & Technology Enablement Specialist',
            meta: 'Melbourne, VIC · Nov 2025 – Present',
            image: 'neuroaiq.svg',
            tldr: 'I help organisations adopt AI confidently, blending behavioural science with practical digital upskilling.',
            context: 'Many teams have access to AI tools but lack the confidence, habits and workflows to use them well. Adoption is as much a human challenge as a technical one.',
            contributions: [
                'Support AI adoption and digital-transformation initiatives across cross-functional teams.',
                'Contribute to the planning and design of client programs focused on AI integration, behavioural science and digital upskilling.'
            ],
            approach: ['AI integration', 'Behavioural science', 'Change enablement', 'Digital upskilling', 'Program design'],
            quest: {
                question: 'Behavioural science says the single most reliable way to help a new habit (like using an AI tool) stick is to…',
                options: ['Send more reminder emails', 'Make it easy and build it into existing routines', 'Explain the theory in more detail'],
                correct: 1,
                why: 'The Behavioural Insights Team\'s EAST framework starts with "Make it Easy". Removing friction and attaching the new behaviour to existing routines beats information alone.',
                hint: 'Friction is the enemy of a new behaviour.'
            }
        },
        {
            title: 'Alcazar Learning',
            role: 'Senior Learning Experience Designer | Ed Technologist',
            meta: 'Melbourne (Hybrid) · 2023 – 2025',
            image: 'alcazar-400.webp',
            tldr: 'I led the research and development of gamified, multimedia-rich digital modules that build professional and interpersonal skills.',
            context: 'Professional and interpersonal skills are hard to teach online. Learners need practice, motivation and relevance, not just content.',
            contributions: [
                'Led research and development of digital modules in professional and interpersonal domains.',
                'Revitalised the curriculum to align with contemporary educational and job-market needs.',
                'Introduced gamification and model-building strategies to lift engagement.',
                'Designed dynamic, interactive experiences using animation and multimedia.',
                'Applied instructional design together with UX principles to boost learner satisfaction and outcomes.'
            ],
            approach: ['Gamification', 'Learning Experience Design', 'Animation & multimedia', 'UX research', 'Curriculum redesign'],
            quest: {
                question: 'According to Self-Determination Theory, which three needs fuel lasting (intrinsic) motivation?',
                options: ['Points, badges and leaderboards', 'Reward, punishment and feedback', 'Autonomy, competence and relatedness'],
                correct: 2,
                why: 'Deci and Ryan\'s Self-Determination Theory identifies autonomy, competence and relatedness. Good gamification serves these needs, and points are only a means to that end.',
                hint: 'The answer isn\'t about the game mechanics themselves.'
            }
        },
        {
            title: 'Peter MacCallum Cancer Centre',
            role: 'Instructional Designer, Genomics Education',
            meta: 'Melbourne (Hybrid) · 2022 – 2023',
            image: 'petermac-400.webp',
            tldr: 'I designed online genomics programs that made complex cancer science accessible for medical scientists and pathologists.',
            context: 'Genomic medicine is changing cancer care quickly. Busy clinicians and scientists need accurate, up-to-date learning that respects their expertise and their time.',
            contributions: [
                'Designed and delivered online programs on genomic cancer for medical scientists and pathologists.',
                'Curated accurate, high-quality content in close partnership with subject-matter experts.',
                'Simplified complex scientific concepts into accessible, interactive learning.',
                'Enhanced knowledge retention and engagement through innovative formats.'
            ],
            approach: ['Medical & genomics education', 'SME collaboration', 'Instructional design', 'Interactive eLearning', 'Content strategy'],
            quest: {
                question: 'When novices learn a complex topic like genomics, which technique most reliably reduces cognitive overload?',
                options: ['Studying worked examples step by step', 'Solving hard problems with no guidance', 'Reading all the detail up front'],
                correct: 0,
                why: 'The worked-example effect from Cognitive Load Theory (John Sweller) shows that novices learn more from studying solved examples. Guidance is then faded as their expertise grows.',
                hint: 'Novices benefit from seeing how an expert does it first.'
            }
        },
        {
            title: 'Monash University',
            role: 'Educational Designer / Educational Support Officer',
            meta: 'Melbourne (Hybrid) · 2019 – 2021',
            image: 'monash-400.webp',
            tldr: 'I built accessible online modules in neuroscience, bioinformatics and immunology with academics and clinicians.',
            context: 'Health and science students come with diverse backgrounds and needs. Technical content has to be accurate and also accessible to everyone.',
            contributions: [
                'Developed learning modules in neuroscience, bioinformatics and immunology.',
                'Applied adult-learning models to improve accessibility and effectiveness.',
                'Integrated instructional design and eLearning technology to enrich courses.',
                'Partnered with lecturers and clinicians to create accurate, impactful content.'
            ],
            approach: ['Adult learning', 'Accessibility & inclusion', 'eLearning development', 'Curriculum design', 'Academic partnership'],
            quest: {
                question: 'Which framework plans for learner variability by offering multiple means of engagement, representation and action and expression?',
                options: ['ADDIE', 'Universal Design for Learning (UDL)', 'Kirkpatrick model'],
                correct: 1,
                why: 'Universal Design for Learning (CAST) builds flexibility in from the start, so more learners can access and succeed without needing separate accommodations.',
                hint: 'It\'s about designing for everyone from the start.'
            }
        },
        {
            title: 'The Florey Institute',
            role: 'PhD, Neuroscience & Neurochemistry (University of Melbourne)',
            meta: 'Melbourne · 2016 – 2021',
            image: 'florey-400.webp',
            tldr: 'My doctoral research on brain function is the scientific foundation of my evidence-based approach to learning design.',
            context: 'I completed my PhD in Neuroscience and Neurochemistry through the University of Melbourne, researching at The Florey Institute of Neuroscience and Mental Health.',
            contributions: [
                'Researched brain function and protein interactions using experimental and computational methods.',
                'Developed strong skills in research design, data analysis and translating complex findings into meaningful insights.',
                'Collaborated with interdisciplinary teams, making sure research outcomes were accurate, compliant and clearly communicated.'
            ],
            approach: ['Research design', 'Data analysis', 'Cognitive & neuroscience foundations', 'Science communication', 'Interdisciplinary collaboration'],
            quest: {
                question: 'What turns a mistake into a powerful learning moment?',
                options: ['Avoiding mistakes altogether', 'Re-reading notes without testing yourself', 'Detecting the error and getting corrective feedback'],
                correct: 2,
                why: 'The brain learns from prediction errors. When an error is detected and quickly corrected with feedback, memory is strengthened. This is why low-stakes testing with feedback works so well.',
                hint: 'Errors aren\'t the problem. What happens next is.'
            }
        }
    ];

    const XP_PER_QUEST = 25;
    const STORE_KEY = 'rt-quests-v2';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    /* ---------- Safe storage ---------- */
    const store = {
        get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
        set(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* storage unavailable */ } },
        remove(key) { try { localStorage.removeItem(key); } catch (e) { /* storage unavailable */ } }
    };

    let completed = new Set();
    try {
        const saved = JSON.parse(store.get(STORE_KEY) || '[]');
        if (Array.isArray(saved)) saved.forEach((i) => { if (projects[i]) completed.add(i); });
    } catch (e) { /* ignore bad data */ }

    const saveProgress = () => store.set(STORE_KEY, JSON.stringify([...completed]));

    /* ---------- Elements ---------- */
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalInner = modal.querySelector('.modal-inner');
    const closeBtn = document.getElementById('modal-close');
    const hud = document.getElementById('hud');
    const hudFill = document.getElementById('hud-fill');
    const hudCount = document.getElementById('hud-count');
    const unlockCard = document.getElementById('unlock-card');
    const toast = document.getElementById('toast');
    const workCards = document.querySelectorAll('.work-card');

    let lastTrigger = null;

    const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    /* ---------- Progress UI ---------- */
    function renderProgress(bump) {
        const n = completed.size;
        const total = projects.length;
        hudFill.style.width = (n / total) * 100 + '%';
        hudCount.textContent = n + '/' + total;
        hud.setAttribute('aria-label', 'XP ' + n + '/' + total + ' quests completed (' + n * XP_PER_QUEST + ' XP)');

        workCards.forEach((card) => {
            const i = Number(card.dataset.open);
            card.classList.toggle('is-complete', completed.has(i));
        });

        unlockCard.hidden = n < total;

        if (bump && !reduceMotion.matches) {
            hud.classList.remove('is-bump');
            void hud.offsetWidth;
            hud.classList.add('is-bump');
        }
    }

    /* ---------- Case-study dialog ---------- */
    function questHTML(i) {
        const q = projects[i].quest;
        const done = completed.has(i);
        const keys = ['A', 'B', 'C', 'D'];
        const opts = q.options.map((opt, k) => {
            const cls = done && k === q.correct ? ' is-correct' : '';
            return '<button type="button" class="quest-option' + cls + '" data-choice="' + k + '"' + (done ? ' disabled' : '') + '>' +
                '<span class="key" aria-hidden="true">' + keys[k] + '</span><span>' + escapeHTML(opt) + '</span></button>';
        }).join('');

        const feedback = done
            ? '<div class="fb fb-good"><strong>Quest complete · +' + XP_PER_QUEST + ' XP</strong><p>' + escapeHTML(q.why) + '</p></div>'
            : '';

        return (
            '<section class="quest" aria-labelledby="quest-title-' + i + '">' +
                '<div class="quest-head">' +
                    '<h3 class="pixel-label" id="quest-title-' + i + '">Micro-quest ' + String(i + 1).padStart(2, '0') + '</h3>' +
                    '<span class="xp-chip">+' + XP_PER_QUEST + ' XP</span>' +
                '</div>' +
                '<fieldset>' +
                    '<legend>' + escapeHTML(q.question) + '</legend>' +
                    '<div class="quest-options">' + opts + '</div>' +
                '</fieldset>' +
                '<div class="quest-feedback" role="status" aria-live="polite">' + feedback + '</div>' +
            '</section>'
        );
    }

    function openProject(i, trigger) {
        const p = projects[i];
        if (!p) return;
        lastTrigger = trigger || document.activeElement;

        const next = (i + 1) % projects.length;

        modalContent.innerHTML =
            '<div class="cs-head">' +
                '<img class="cs-thumb pixel-art" src="' + p.image + '" alt="" width="112" height="112">' +
                '<div>' +
                    '<p class="pixel-label">Case study ' + String(i + 1).padStart(2, '0') + '</p>' +
                    '<h2 id="modal-title">' + escapeHTML(p.title) + '</h2>' +
                    '<p class="cs-meta">' + escapeHTML(p.role) + ' · ' + escapeHTML(p.meta) + '</p>' +
                '</div>' +
            '</div>' +
            '<p class="cs-tldr">' + escapeHTML(p.tldr) + '</p>' +
            '<div class="cs-block"><h3>Context</h3><p>' + escapeHTML(p.context) + '</p></div>' +
            '<div class="cs-block"><h3>What I did</h3><ul>' + p.contributions.map((c) => '<li>' + escapeHTML(c) + '</li>').join('') + '</ul></div>' +
            '<div class="cs-block"><h3>Approach &amp; skills</h3><ul class="chips">' + p.approach.map((a) => '<li>' + escapeHTML(a) + '</li>').join('') + '</ul></div>' +
            '<p class="cs-note">Client and organisational details are summarised at a high level to respect confidentiality.</p>' +
            questHTML(i) +
            '<div class="modal-foot">' +
                '<button type="button" class="btn btn-ghost" data-close>Close</button>' +
                '<button type="button" class="btn btn-secondary" data-next="' + next + '">Next: ' + escapeHTML(projects[next].title) + ' →</button>' +
            '</div>';

        modalContent.dataset.index = i;

        if (!modal.open) {
            if (typeof modal.showModal === 'function') modal.showModal();
            else modal.setAttribute('open', '');
            document.body.style.overflow = 'hidden';
        }
        modalInner.scrollTop = 0;
        closeBtn.focus();
    }

    function onClosed() {
        document.body.style.overflow = '';
        document.body.appendChild(toast);
        if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    }

    function closeProject() {
        if (typeof modal.close === 'function') {
            if (modal.open) modal.close();
        } else {
            // Fallback for browsers without <dialog>: no 'close' event fires
            modal.removeAttribute('open');
            onClosed();
        }
    }

    modal.addEventListener('close', onClosed);

    // Click on backdrop closes (the dialog element itself is the backdrop area)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProject();
    });

    closeBtn.addEventListener('click', closeProject);

    modalContent.addEventListener('click', (e) => {
        const choice = e.target.closest('[data-choice]');
        if (choice) return answer(Number(modalContent.dataset.index), Number(choice.dataset.choice), choice);

        if (e.target.closest('[data-close]')) return closeProject();

        const nextBtn = e.target.closest('[data-next]');
        if (nextBtn) {
            const n = Number(nextBtn.dataset.next);
            const card = document.querySelector('.work-card[data-open="' + n + '"]');
            openProject(n, card || lastTrigger);
        }
    });

    /* ---------- Quests ---------- */
    function answer(i, choice, btn) {
        const q = projects[i].quest;
        const feedback = modalContent.querySelector('.quest-feedback');
        const buttons = modalContent.querySelectorAll('.quest-option');

        if (choice === q.correct) {
            buttons.forEach((b) => { b.disabled = true; });
            btn.classList.add('is-correct');
            feedback.innerHTML = '<div class="fb fb-good"><strong>Correct! +' + XP_PER_QUEST + ' XP</strong><p>' + escapeHTML(q.why) + '</p></div>';

            const isNew = !completed.has(i);
            completed.add(i);
            saveProgress();
            renderProgress(isNew);

            if (isNew) {
                if (completed.size === projects.length) {
                    showToast('Achievement unlocked · Portfolio Explorer');
                    confetti(120);
                    unlockCard.classList.add('is-new');
                } else {
                    showToast('Quest complete · ' + completed.size + '/' + projects.length);
                    confetti(40);
                }
            }
        } else {
            // Safe failure: mark this option, keep others open, give a hint
            btn.classList.add('is-wrong');
            btn.disabled = true;
            feedback.innerHTML = '<div class="fb fb-bad"><strong>Not quite, try again</strong><p>Hint: ' + escapeHTML(q.hint) + '</p></div>';
        }
    }

    let toastTimer;
    function showToast(msg) {
        // A modal dialog sits in the top layer and makes the page inert,
        // so the toast must live inside it to be seen and announced
        (modal.open ? modal : document.body).appendChild(toast);
        toast.textContent = msg;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
    }

    function confetti(count) {
        if (reduceMotion.matches) return;
        const colours = ['#2F4BD8', '#F5B84A', '#5BD68F', '#FF8FB1', '#22D3B8', '#B45309'];
        const layer = document.createElement('div');
        layer.className = 'confetti';
        layer.setAttribute('aria-hidden', 'true');
        for (let k = 0; k < count; k++) {
            const bit = document.createElement('i');
            bit.style.left = Math.random() * 100 + '%';
            bit.style.background = colours[k % colours.length];
            bit.style.animationDuration = 1.8 + Math.random() * 1.6 + 's';
            bit.style.animationDelay = Math.random() * 0.6 + 's';
            layer.appendChild(bit);
        }
        // Inside an open dialog the top layer covers the page, so attach there
        (modal.open ? modal : document.body).appendChild(layer);
        setTimeout(() => layer.remove(), 4200);
    }

    document.getElementById('reset-progress').addEventListener('click', () => {
        completed = new Set();
        store.remove(STORE_KEY);
        unlockCard.classList.remove('is-new');
        renderProgress(false);
        showToast('Quests reset. Good luck!');
        // The reset button is inside the now-hidden unlock card, so move focus
        const first = document.querySelector('.work-card');
        first.focus({ preventScroll: true });
        first.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'center' });
    });

    /* ---------- Openers (cards + timeline links) ---------- */
    document.querySelectorAll('[data-open]').forEach((el) => {
        el.addEventListener('click', () => openProject(Number(el.dataset.open), el));
    });

    /* ---------- Theme toggle ---------- */
    const themeBtn = document.getElementById('theme-toggle');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

    function currentTheme() {
        return document.documentElement.dataset.theme || (systemDark.matches ? 'dark' : 'light');
    }
    function syncThemeLabel() {
        const t = currentTheme();
        themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    themeBtn.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        store.set('rt-theme', next);
        syncThemeLabel();
    });
    syncThemeLabel();
    if (systemDark.addEventListener) systemDark.addEventListener('change', syncThemeLabel);

    /* ---------- Mobile menu ---------- */
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('site-nav');

    function setMenu(open) {
        nav.classList.toggle('is-open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
    });

    /* ---------- Active nav link on scroll ---------- */
    const navLinks = [...nav.querySelectorAll('a')];
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((a) => {
                    if (a.getAttribute('href') === '#' + entry.target.id) a.setAttribute('aria-current', 'true');
                    else a.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        navLinks.forEach((a) => {
            const sec = document.querySelector(a.getAttribute('href'));
            if (sec) io.observe(sec);
        });
    }

    renderProgress(false);
})();
