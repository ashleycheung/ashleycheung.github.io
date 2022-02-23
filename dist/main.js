/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutMe.ts":
/*!************************!*\
  !*** ./src/aboutMe.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AboutMe = void 0;\nconst component_1 = __webpack_require__(/*! ./component */ \"./src/component.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./src/helper.ts\");\nclass AboutMe extends component_1.Component {\n    createElement() {\n        return (0, helper_1.createHTMLElement)('div', {\n            id: 'about-me',\n            class: 'about-me',\n            children: [\n                (0, helper_1.createHTMLElement)('h2', {\n                    class: 'center-title',\n                    innerText: 'About Me'\n                }),\n                (0, helper_1.createHTMLElement)('div', {\n                    class: 'about-me-content',\n                    children: [\n                        (0, helper_1.createHTMLElement)('img', {\n                            class: 'about-me-img',\n                            src: '/assets/profile.jpg'\n                        }),\n                        (0, helper_1.createHTMLElement)('div', {\n                            class: 'about-me-text',\n                            innerText: `I am an aspiring engineer, and currently a student at UNSW studying mechatronics engineering and computer science. In my spare time, I love to tinker around with code and make fun projects! In my downtimes, I love to go for runs and cycle at the park!`\n                        })\n                    ]\n                })\n            ]\n        });\n    }\n}\nexports.AboutMe = AboutMe;\n\n\n//# sourceURL=webpack://portfolio/./src/aboutMe.ts?");

/***/ }),

/***/ "./src/component.ts":
/*!**************************!*\
  !*** ./src/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nclass Component {\n    constructor() {\n        this.root = null;\n        this.elem = this.createElement();\n    }\n    /**\n     *  Inserts under parent\n     * @param root\n     */\n    attach(root) {\n        this.root = root;\n        this.root.appendChild(this.elem);\n    }\n    /**\n     * Removes the current component\n     */\n    remove() {\n        this.elem.remove();\n    }\n}\nexports.Component = Component;\n\n\n//# sourceURL=webpack://portfolio/./src/component.ts?");

/***/ }),

/***/ "./src/header.ts":
/*!***********************!*\
  !*** ./src/header.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Header = void 0;\nconst component_1 = __webpack_require__(/*! ./component */ \"./src/component.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./src/helper.ts\");\nclass Header extends component_1.Component {\n    constructor() {\n        super(...arguments);\n        this.lastScroll = document.body.scrollTop;\n        /**\n         * Stores the render header callback function\n         */\n        this.renderHeader = () => {\n            if (document.body.scrollTop > this.lastScroll && document.body.scrollTop !== 0) {\n                this.elem.classList.add('header-hide');\n                this.elem.classList.remove('header-show');\n            }\n            else {\n                this.elem.classList.add('header-show');\n                this.elem.classList.remove('header-hide');\n            }\n            this.lastScroll = document.body.scrollTop;\n        };\n        this.hideMobileNav = () => {\n            const navBarMobile = document.getElementsByClassName('header-mobile-nav')[0];\n            navBarMobile.style.right = \"-75%\";\n            navBarMobile.style.zIndex = '0';\n        };\n        this.showMobileNav = () => {\n            const navBarMobile = document.getElementsByClassName('header-mobile-nav')[0];\n            navBarMobile.style.right = \"0px\";\n            navBarMobile.style.zIndex = '999';\n        };\n    }\n    createElement() {\n        /**\n          Mobile header\n        */\n        if ((0, helper_1.isMobile)()) {\n            // Header\n            return (0, helper_1.createHTMLElement)('div', {\n                class: 'header header-hide',\n                children: [\n                    (0, helper_1.createHTMLElement)('img', {\n                        class: 'header-logo',\n                        src: './assets/favicon.svg'\n                    }),\n                    (0, helper_1.createHTMLElement)('div', {\n                        class: 'header-menu-btn',\n                        onclick: () => this.showMobileNav(),\n                        children: [\n                            (0, helper_1.createHTMLElement)('img', {\n                                src: './assets/bars.svg',\n                            }),\n                        ]\n                    }),\n                    (0, helper_1.createHTMLElement)('div', {\n                        class: 'header-mobile-nav',\n                        children: [\n                            (0, helper_1.createHTMLElement)('img', {\n                                class: 'header-mobile-exit-btn',\n                                src: './assets/cross.svg',\n                                onclick: () => this.hideMobileNav(),\n                            }),\n                            (0, helper_1.createHTMLElement)('a', {\n                                class: 'header-mobile-nav-item',\n                                href: '#about-me',\n                                innerText: 'About',\n                                onclick: () => this.hideMobileNav(),\n                            }),\n                            (0, helper_1.createHTMLElement)('a', {\n                                class: 'header-mobile-nav-item',\n                                href: '#experience',\n                                innerText: 'Experience',\n                                onclick: () => this.hideMobileNav(),\n                            }),\n                            (0, helper_1.createHTMLElement)('a', {\n                                class: 'header-mobile-nav-item',\n                                href: '#projects',\n                                innerText: 'Projects',\n                                onclick: () => this.hideMobileNav(),\n                            }),\n                            (0, helper_1.createHTMLElement)('a', {\n                                class: 'header-mobile-nav-item',\n                                href: '#contact',\n                                innerText: 'Contact',\n                                onclick: () => this.hideMobileNav(),\n                            }),\n                        ]\n                    })\n                ]\n            });\n        }\n        /**\n          Laptop\n        */\n        return (0, helper_1.createHTMLElement)('div', {\n            class: 'header header-hide',\n            children: [\n                (0, helper_1.createHTMLElement)('img', {\n                    class: 'header-logo',\n                    src: './assets/favicon.svg'\n                }),\n                (0, helper_1.createHTMLElement)('div', {\n                    class: 'header-nav',\n                    children: [\n                        (0, helper_1.createHTMLElement)('a', {\n                            class: 'header-nav-item',\n                            href: '#about-me',\n                            innerText: 'About'\n                        }),\n                        (0, helper_1.createHTMLElement)('a', {\n                            class: 'header-nav-item',\n                            href: '#experience',\n                            innerText: 'Experience'\n                        }),\n                        (0, helper_1.createHTMLElement)('a', {\n                            class: 'header-nav-item',\n                            href: '#projects',\n                            innerText: 'Projects'\n                        }),\n                        (0, helper_1.createHTMLElement)('a', {\n                            class: 'header-nav-item',\n                            href: '#contact',\n                            innerText: 'Contact'\n                        }),\n                    ]\n                })\n            ]\n        });\n    }\n    attach(root) {\n        super.attach(root);\n        // Update the last scroll\n        this.lastScroll = document.body.scrollTop;\n        // On scroll check if at top\n        window.addEventListener('scroll', this.renderHeader);\n        this.renderHeader();\n    }\n    remove() {\n        super.remove();\n        window.removeEventListener('scroll', this.renderHeader);\n    }\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack://portfolio/./src/header.ts?");

/***/ }),

/***/ "./src/helper.ts":
/*!***********************!*\
  !*** ./src/helper.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isMobile = exports.replaceChildren = exports.createHTMLElement = exports.setMobileFullScreen = void 0;\nfunction setMobileFullScreen() {\n    // We execute the same script as before\n    let vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty('--vh', `${vh}px`);\n    // We listen to the resize event\n    window.addEventListener('resize', () => {\n        // We execute the same script as before\n        let vh = window.innerHeight * 0.01;\n        document.documentElement.style.setProperty('--vh', `${vh}px`);\n    });\n}\nexports.setMobileFullScreen = setMobileFullScreen;\n/**\n *\n * @param name\n * @param attributes\n * @returns\n */\nfunction createHTMLElement(name, attributes) {\n    let newElem = document.createElement(name);\n    for (let a in attributes) {\n        if (a.startsWith('on')) {\n            newElem.addEventListener(a.substring(2), attributes[a]);\n        }\n        else if (a == 'innerText') {\n            newElem.innerText = attributes[a];\n        }\n        else if (a == 'class') {\n            //Add each class to the class list\n            for (let className of attributes[a].split(' ')) {\n                newElem.classList.add(className);\n            }\n        }\n        else if (a == 'children') {\n            //If given a list of children, add it to the new element\n            for (let child of attributes[a]) {\n                newElem.appendChild(child);\n            }\n        }\n        else {\n            newElem.setAttribute(a, attributes[a]);\n        }\n    }\n    return newElem;\n}\nexports.createHTMLElement = createHTMLElement;\nfunction replaceChildren(root, children) {\n    // For older browsers that dont have replace children\n    if (root.replaceChildren === undefined) {\n        for (const c of root.children) {\n            root.removeChild(c);\n        }\n        if (children !== null) {\n            root.appendChild(children);\n        }\n    }\n    else {\n        if (children !== null) {\n            root.replaceChildren(children);\n        }\n        else {\n            root.replaceChildren();\n        }\n    }\n}\nexports.replaceChildren = replaceChildren;\n/**\n * Returns if currently on mobile\n * @returns\n */\nfunction isMobile() {\n    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);\n}\nexports.isMobile = isMobile;\n\n\n//# sourceURL=webpack://portfolio/./src/helper.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst aboutMe_1 = __webpack_require__(/*! ./aboutMe */ \"./src/aboutMe.ts\");\nconst header_1 = __webpack_require__(/*! ./header */ \"./src/header.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./src/helper.ts\");\nconst landing_1 = __webpack_require__(/*! ./landing */ \"./src/landing.ts\");\nconst loader_1 = __webpack_require__(/*! ./loader */ \"./src/loader.ts\");\nconst project_1 = __webpack_require__(/*! ./project */ \"./src/project.ts\");\n(0, helper_1.setMobileFullScreen)();\ndocument.addEventListener('DOMContentLoaded', loader_1.createLazyLoad, { once: true });\nconst root = document.body;\nconst header = new header_1.Header();\nheader.attach(root);\nconst landing = new landing_1.LandingPage();\nlanding.attach(root);\nconst aboutMe = new aboutMe_1.AboutMe();\naboutMe.attach(root);\nconst projects = new project_1.Projects();\nprojects.attach(root);\n\n\n//# sourceURL=webpack://portfolio/./src/index.ts?");

/***/ }),

/***/ "./src/landing.ts":
/*!************************!*\
  !*** ./src/landing.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LandingPage = void 0;\nconst component_1 = __webpack_require__(/*! ./component */ \"./src/component.ts\");\nconst THREE = __importStar(__webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\"));\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./src/helper.ts\");\nclass LandingPage extends component_1.Component {\n    createElement() {\n        return (0, helper_1.createHTMLElement)('div', {\n            class: 'landing-canvas-wrapper',\n            children: [\n                (0, helper_1.createHTMLElement)('div', {\n                    class: 'landing-canvas-text',\n                    children: [\n                        (0, helper_1.createHTMLElement)('div', {\n                            class: 'landing-canvas-title',\n                            innerText: 'Ashley Cheung'\n                        }),\n                        (0, helper_1.createHTMLElement)('div', {\n                            class: 'landing-canvas-subtitle',\n                            innerText: 'Software and Mechatronics Engineer'\n                        }),\n                        (0, helper_1.createHTMLElement)('button', {\n                            class: 'landing-canvas-btn',\n                            innerText: 'View my projects',\n                            children: [\n                                (0, helper_1.createHTMLElement)('a', {\n                                    class: 'landing-canvas-btn-link',\n                                    href: '#projects'\n                                })\n                            ]\n                        })\n                    ]\n                }),\n                (0, helper_1.createHTMLElement)('canvas', {\n                    width: window.innerWidth,\n                    height: window.innerHeight,\n                    class: \"landing-canvas\"\n                })\n            ]\n        });\n    }\n    attach(root) {\n        super.attach(root);\n        const scene = new THREE.Scene();\n        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        const renderer = new THREE.WebGL1Renderer({\n            alpha: true,\n            canvas: document.getElementsByClassName('landing-canvas')[0]\n        });\n        renderer.setPixelRatio(window.devicePixelRatio);\n        renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);\n        // Make geometry\n        const geometry = new THREE.IcosahedronGeometry(1.75, 0);\n        const material = new THREE.MeshStandardMaterial({ color: 0x46C2C9 });\n        const shape = new THREE.Mesh(geometry, material);\n        scene.add(shape);\n        // Add light\n        const pointLight = new THREE.PointLight(0xffffff);\n        pointLight.position.set(5, 5, 5);\n        const light = new THREE.AmbientLight(0xffffff);\n        scene.add(pointLight, light);\n        camera.position.z = 5;\n        // Animation loop\n        const animate = () => {\n            requestAnimationFrame(animate);\n            shape.rotation.x += 0.01;\n            shape.rotation.y += 0.01;\n            renderer.render(scene, camera);\n        };\n        animate();\n    }\n}\nexports.LandingPage = LandingPage;\n\n\n//# sourceURL=webpack://portfolio/./src/landing.ts?");

/***/ }),

/***/ "./src/loader.ts":
/*!***********************!*\
  !*** ./src/loader.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createLazyLoad = void 0;\nfunction createLazyLoad() {\n    const lazyElems = document.getElementsByClassName('lazy-load');\n    for (const l of lazyElems) {\n        // Load element\n        const observer = new IntersectionObserver((entries) => {\n            entries.forEach(e => {\n                // Load when intersecting\n                if (e.isIntersecting) {\n                    l.src = l.getAttribute('data-src');\n                    observer.unobserve(l);\n                    l.classList.add('lazy-loaded');\n                }\n            });\n        });\n        observer.observe(l);\n    }\n}\nexports.createLazyLoad = createLazyLoad;\n// window.addEventListener('load', () => {\n//   const loadingscreen = document.getElementById('loading-screen');\n//   // Wait one second\n//   setTimeout(() => {\n//     loadingscreen.classList.add('loading-screen-hidden');\n//     loadingscreen.classList.remove('loading-screen-visible');\n//   }, 1000);\n// });\n\n\n//# sourceURL=webpack://portfolio/./src/loader.ts?");

/***/ }),

/***/ "./src/project.ts":
/*!************************!*\
  !*** ./src/project.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Projects = void 0;\nconst component_1 = __webpack_require__(/*! ./component */ \"./src/component.ts\");\nconst helper_1 = __webpack_require__(/*! ./helper */ \"./src/helper.ts\");\nconst projectdata_1 = __webpack_require__(/*! ./projectdata */ \"./src/projectdata.ts\");\nclass Projects extends component_1.Component {\n    createElement() {\n        return (0, helper_1.createHTMLElement)('div', {\n            id: 'projects',\n            class: 'projects-page-wrapper',\n            children: [\n                (0, helper_1.createHTMLElement)('h2', {\n                    class: 'center-title',\n                    innerText: 'Projects'\n                }),\n                this._createFeaturedProjects(),\n            ]\n        });\n    }\n    _createProjectSelector(renderProjects, tag) {\n        const onClick = (e) => {\n            renderProjects(e.target.innerText);\n        };\n        const className = (t) => t.toLowerCase() === tag.toLowerCase() ?\n            `project-selector-btn project-selector-btn-active` :\n            'project-selector-btn';\n        return (0, helper_1.createHTMLElement)('div', {\n            'class': 'project-selector',\n            children: [\n                (0, helper_1.createHTMLElement)('button', {\n                    class: className('all'),\n                    innerText: 'All',\n                    onclick: onClick,\n                }),\n                (0, helper_1.createHTMLElement)('button', {\n                    class: className('react'),\n                    innerText: 'React',\n                    onclick: onClick,\n                }),\n                (0, helper_1.createHTMLElement)('button', {\n                    class: className('python'),\n                    innerText: 'Python',\n                    onclick: onClick,\n                }),\n            ]\n        });\n    }\n    _createRegularProjects(tag = 'all') {\n        // Make regular projects\n        const projChildren = [];\n        for (const project of projectdata_1.DATA.projects) {\n            // Convert all technologies to lower case\n            const lowerTech = project.technologies.map(t => t.toLowerCase());\n            const tagLower = tag.toLowerCase();\n            // Only render if all is selected or correct tag\n            if (tagLower === 'all' || lowerTech.includes(tagLower)) {\n                projChildren.push((0, helper_1.createHTMLElement)('div', {\n                    class: 'project-wrapper',\n                    onclick: () => window.open(project.projectSrc, '_blank').focus(),\n                    children: [\n                        (0, helper_1.createHTMLElement)('img', {\n                            class: 'project-thumbnail lazy-load',\n                            'data-src': project.thumbnailSrc,\n                            loading: 'lazy',\n                        }),\n                        (0, helper_1.createHTMLElement)('div', {\n                            class: 'project-title',\n                            innerText: project.title\n                        }),\n                        (0, helper_1.createHTMLElement)('div', {\n                            class: 'project-tech-list',\n                            innerText: project.technologies.reduce((p, c) => `${p} / ${c}`)\n                        }),\n                        (0, helper_1.createHTMLElement)('div', {\n                            class: 'project-desc',\n                            innerText: project.desc\n                        }),\n                    ]\n                }));\n            }\n        }\n        // // Add to rootDiv\n        // rootDiv.replaceChildren(\n        //   this._createRegularProjects(this.renderRegularProjects, tag),\n        //   e('div', {\n        //     class: 'project-list',\n        //     children: projChildren,\n        //   })\n        // );\n        // // Lazy Load\n        // createLazyLoad();\n        return (0, helper_1.createHTMLElement)('div', {\n            class: 'project-regular-wrapper'\n        });\n    }\n    _createFeaturedProjects() {\n        // Make featured projects\n        const projChildren = [];\n        for (const project of projectdata_1.DATA.featuredProjects) {\n            projChildren.push((0, helper_1.createHTMLElement)('div', {\n                class: 'project-featured-wrapper',\n                children: [\n                    (0, helper_1.createHTMLElement)('img', {\n                        class: 'project-featured-thumbnail lazy-load',\n                        'data-src': project.thumbnailSrc,\n                        onclick: () => window.open(project.projectSrc, '_blank').focus(),\n                    }),\n                    (0, helper_1.createHTMLElement)('div', {\n                        class: 'project-featured-content',\n                        children: [\n                            (0, helper_1.createHTMLElement)('div', {\n                                class: 'project-featured-title',\n                                innerText: project.title\n                            }),\n                            (0, helper_1.createHTMLElement)('div', {\n                                class: 'project-featured-tech-list',\n                                innerText: project.technologies.reduce((p, c) => `${p} / ${c}`)\n                            }),\n                            (0, helper_1.createHTMLElement)('div', {\n                                class: 'project-featured-desc',\n                                innerText: project.desc\n                            })\n                        ]\n                    })\n                ]\n            }));\n        }\n        return (0, helper_1.createHTMLElement)('div', {\n            class: 'project-featured-list',\n            children: projChildren,\n        });\n    }\n}\nexports.Projects = Projects;\n\n\n//# sourceURL=webpack://portfolio/./src/project.ts?");

/***/ }),

/***/ "./src/projectdata.ts":
/*!****************************!*\
  !*** ./src/projectdata.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DATA = void 0;\nexports.DATA = {\n    \"featuredProjects\": [\n        {\n            \"title\": \"Flow Forms\",\n            \"desc\": `A node based form application to create forms with complex flow chart logic. Forms can be exported as HTML file to be embedded within another application.\n      `,\n            \"thumbnailSrc\": \"/assets/flowForms.png\",\n            \"projectSrc\": \"https://ashleycheung.github.io/flow-forms/\",\n            \"technologies\": [\n                \"React\",\n                \"Javascript\"\n            ]\n        },\n        {\n            \"title\": \"Stock Overflow\",\n            \"desc\": `A stocks portfolio web app. A University Capstone project.\n      `,\n            \"thumbnailSrc\": \"/assets/stockOverflow.png\",\n            \"projectSrc\": \"https://stock-overflow-frontend.vercel.app/\",\n            \"technologies\": [\n                \"React\",\n                \"Javascript\",\n                \"NodeJS\",\n                \"MongoDB\"\n            ]\n        },\n        {\n            \"title\": \"Doggo Run\",\n            \"desc\": `A web browser game made for mobile.\n      `,\n            \"thumbnailSrc\": \"/assets/doggoRun.png\",\n            \"projectSrc\": \"https://doggo-run.vercel.app/\",\n            \"technologies\": [\n                \"Javascript\",\n                \"ThreeJS\",\n            ]\n        },\n        {\n            \"title\": \"Virtual Queue\",\n            \"desc\": `A real-time virtual queue application built using the Socket.io library.\n      `,\n            \"thumbnailSrc\": \"/assets/virtualQueue.png\",\n            \"projectSrc\": \"https://ashleycheung.github.io/virtual-queue/\",\n            \"technologies\": [\n                \"React\",\n                \"Javascript\",\n                \"NodeJS\",\n                \"Socket.IO\"\n            ]\n        }\n    ],\n    \"projects\": [\n        {\n            \"title\": \"Space Shooter\",\n            \"desc\": \"A web-based real time multiplayer shooting game\",\n            \"thumbnailSrc\": \"/assets/spaceShooter.png\",\n            \"projectSrc\": \"http://space-shooter-io.herokuapp.com/\",\n            \"technologies\": [\n                \"Javascript\",\n                \"NodeJS\",\n                \"Socket.IO\"\n            ]\n        },\n        {\n            \"title\": \"Ashley Bot\",\n            \"desc\": \"A chatbot that uses google's dialogflow API.\",\n            \"thumbnailSrc\": \"/assets/ashleyBot.png\",\n            \"projectSrc\": \"https://ashleycheung.github.io/AshleyBot/\",\n            \"technologies\": [\n                \"Python\",\n                \"Flask\",\n                \"React\",\n                \"Javascript\",\n                \"DialogueFlow API\"\n            ]\n        },\n        {\n            \"title\": \"Battle Room\",\n            \"desc\": \"A dungeon crawler with procedural map generation utilising the Godot Game Engine\",\n            \"thumbnailSrc\": \"/assets/battleroom.png\",\n            \"projectSrc\": \"https://ashleycheung.itch.io/battleroom\",\n            \"technologies\": [\n                \"Godot\"\n            ]\n        },\n        {\n            \"title\": \"Hymn Finder\",\n            \"desc\": \"A web application that searches for hymns given a specific bible verse. It utilises React and the hymnary API.\",\n            \"thumbnailSrc\": \"/assets/hymnFinder.png\",\n            \"projectSrc\": \"https://ashleycheung.github.io/hymnfinder/\",\n            \"technologies\": [\n                \"React\",\n                \"Javascript\",\n                \"CSS\",\n                \"HTML\"\n            ]\n        },\n        {\n            \"title\": \"Diep.io Bot\",\n            \"desc\": \"A bot that uses computer vision to play the game Diep.io. It utilises Python and OpenCV.\",\n            \"thumbnailSrc\": \"/assets/diepio.gif\",\n            \"projectSrc\": \"https://github.com/ashleycheung/DiepIO-Bot\",\n            \"technologies\": [\n                \"Python\",\n                \"OpenCV\"\n            ]\n        },\n        {\n            \"title\": \"HyStats\",\n            \"desc\": \"A web application to view statistics from Minecraft Hypixel\",\n            \"thumbnailSrc\": \"/assets/hystats.png\",\n            \"projectSrc\": \"https://github.com/ashleycheung/Hystats/\",\n            \"technologies\": [\n                \"React\",\n                \"Javascript\"\n            ]\n        },\n        {\n            \"title\": \"Tetris\",\n            \"desc\": \"A clone of the popular game Tetris, using the Python Library Pygame.\",\n            \"thumbnailSrc\": \"/assets/tetris.gif\",\n            \"projectSrc\": \"https://github.com/ashleycheung/Tetris-Clone\",\n            \"technologies\": [\n                \"Python\",\n                \"PyGame\"\n            ]\n        }\n    ]\n};\n\n\n//# sourceURL=webpack://portfolio/./src/projectdata.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.cjs":
/*!********************************************!*\
  !*** ./node_modules/three/build/three.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;