(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sample__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample */ "./src/app/sample.ts");




function parseOutLinks(content) {
    const re = /\[\[[^\]]+\]\]/g;
    const matches = content.match(re);
    if (matches && matches.length) {
        return matches.map(xs => xs.replace('[[', '').replace(']]', ''));
    }
    return [];
}
let AppComponent = class AppComponent {
    constructor(HotkeysService) {
        this.HotkeysService = HotkeysService;
        this.showingContext = true;
        this.graph = _sample__WEBPACK_IMPORTED_MODULE_3__["SAMPLE"];
        this.HotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('meta+`', (e) => {
            e.preventDefault();
            this.toggleContext();
            return false;
        }));
    }
    toggleContext() {
        this.showingContext = !this.showingContext;
    }
    getActiveItem() {
        const [item] = this.graph.filter(i => i.active);
        return item;
    }
    setActiveItem(id) {
        // if id doesn't exist, create it
        if (!this.graph.filter(i => i.id === id).length) {
            this.graph.push({
                id: id,
                content: '',
                active: false
            });
        }
        this.graph = this.graph.map(i => (Object.assign({}, i, { active: i.id === id })));
    }
    getItemsLinkedTowardThis() {
        const { id } = this.getActiveItem();
        return this.graph.filter(i => i.id !== id && parseOutLinks(i.content).indexOf(id) > -1).map(i => i.id);
    }
    getItemsLinkedAwayFromThis() {
        return parseOutLinks(this.getActiveItem().content || '').sort();
    }
    outputGraph() {
        console.log(JSON.stringify(this.graph));
    }
};
AppComponent.ctorParameters = () => [
    { type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <div class="container">
      <div class="links-toward-this" *ngIf="showingContext">
        <button (click)="setActiveItem(id)" *ngFor="let id of getItemsLinkedTowardThis()">{{id}}</button>
      </div>

      <div class="this">
        <input [disabled]="getItemsLinkedTowardThis().length" [(ngModel)]="getActiveItem().id" placeholder="title"> <!-- can't change id if linked from another page -->
        <textarea [(ngModel)]="getActiveItem().content" placeholder="content">
        </textarea>
        <button (click)="outputGraph()">output graph</button>
      </div>

      <div class="links-away-from-this" *ngIf="showingContext">
        <button (click)="setActiveItem(id)" *ngFor="let id of getItemsLinkedAwayFromThis()">{{id}}</button>
      </div>
    </div>
  `,
        styles: ["\n    .container {\n      display: flex;\n      min-height: 100vh;\n    }\n\n    .links-toward-this {\n      width: 300px;\n      background: #ddd;\n    }\n\n    .this {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n    }\n\n    textarea, input {\n      font-size: 1em;\n    }\n\n    textarea {\n      flex: 1;\n    }\n\n    .links-away-from-this {\n      width: 300px;\n      background: #ddd;\n    }\n  \n  "]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_4__["HotkeyModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/sample.ts":
/*!***************************!*\
  !*** ./src/app/sample.ts ***!
  \***************************/
/*! exports provided: SAMPLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE", function() { return SAMPLE; });
const SAMPLE = [
    {
        "id": "programmers aren’t just programmers",
        "content": "https://corecursive.com/david-heinemeier-hansson-software-contrarian-transcript/\n\n\n[[programmers are humans: you must appeal to their deeper humanity]]\n\nAnd I tried to follow in Ruby’s footsteps of appealing to the whole person, um, to sort of a deeper humanity in, in, in programmers and for reasons greater just then let’s make software, right? Like, let’s make software that we really enjoy making. Where the art of creating the software is a pleasurable experience in and of itself that can supersede and be more important than all these other attributes we keep talking about.\n\nlet’s make software that we really enjoy making\n[[the creation of software should be pleasurable in and of itself]]\nruby is daring by going out and saying that the most important design criteria is “programmer happiness”, ruby speaks to a deeper aspect of humanity\n\n\n“And I think that that’s sort of the magic of programming, right? Like we get to build these things out of sort of basically the ‘spit’ of our imagination” [[software is a machine-executable representation of a mental model]]\n\n\nI love this idea that like the web is being served by hundreds of different programming languages that I could be using this web app I really like, and it’s actually a written in Ocaml or or algo 64 or whatever esoteric language.\nIt could be like, that’s, um, there’s just something heartwarming in that, that this idea of the monoculture that like  this is all just a battle to the death and there’s going to be one framework and there’s going to be one programming language that lifts. Is left standing. Programmers are really drawn into that right into that horse race.\nSo much of their technology choices seem to be predicated on like, is this popular? Is this going to be popular next year? Do you know what I mean? Fuck that.\n\nNot all, not in all places, but plenty of them who have the freedom to just pick something because like they want to do it. And, and I say to them, please, do I want to see what that ocaml next framework is going to be?\n\n\n\n\nWhat I do have an deep, deep affection for is sort of domain modeling. I’m sort of in the, uh, Eric Evans sense of the word domain, uh, driven design.\nUh, I love noodling with a business domain. I love finding just the right words. I love sort of breaking that, the main model apart and, and all that stuff, which is all sort of.  logicals sort of semantical approaches to it. It is not algorithmic. It is not scientific. It is not. Um, math.\n\n\n\nThat makes sense. Yeah. So I had somebody on as a guest, and he was talking about how, like some people really think about coding as math, but he thinks of it as, as like literature. Uh, what do you, what’s your take on that? -> WHO WAS THIS??? https://corecursive.com/david-heinemeier-hansson-software-contrarian-transcript/\n\n\n\nYeah. I’m, I’m in that camp. I had a. Keynote at a rails comp. I think about five years ago where I framed all of the sort of approach, how we think about programming rather than thinking of about like construction projects or thinking about math properties. -> DHH\n\n\nUm, it’s just the, the blinders of sort of ideology. And, and I can see where they’re coming from, right? Because I’m actually, I’m a fan of ideology in many ways. I’m a fan about having values and practices and beliefs that underpin your paths for life. But you gotta recognize the fact that when you adopt an ideology, uh, the trap is that it puts blinders on your head, right?\n\nAnd you start thinking that the values that you hold dear are these universal truths. That are true for everyone rather than just your personal truths. I’m very comfortable accepting just the personal truths of Ruby for me. I don’t need everyone in the world to believe those same truth. They’re true for me.\n\n\n“the right language for the kind of work that I do using the brain that I have”\n\none of the biggest shifts we’ve seen is the shift from talking about “enterprise apps” being the next frontier, to “web-scale” being the frontier. this is the vanguard of pushing things to the limit (they’re building their own damn hardware for christsake). these are not the problems that 99% of software developers face. the 1% can go and make their own software, THEY ALWAYS HAVE!!!!\n\nwe hold the 1% in some reverence (to our detriment) can’t build your own house out of skyscraper i-beams\n\nI think finally. Um, but also just on the practical sense, trying to learn from the people who have the 1% problems and apply those to your 99% concerns is often exactly the opposite of what you should be doing. The constraints and challenges that Google face at Webscale are just utterly irrelevant. To what the 99% are dealing with.\n\nUSE THAT REVERENCE AS A “DISTANT APPRECIATION”, NOT A FUCKING GUIDEBOOK!!!\n\nOn SPAs:\n\nEven if I think that the single page application front end is a horrifically overuse pattern, far more so than than even microservices. And I think, so the crimes, against programming humanities that have been done in the service of single page applications are far worse than the ones that have been done in the service of microservices. I would rather retire and fucking, I don’t know, make weaved baskets than deal with that shit.If I had to work in assembler or, or even C, I’d go like, do you know what? I could do something else with my life. It doesn’t have to be programming. And if someone told me, do you know what? You have to build a fleet of microservices and the has to work with a single page application, front end.\nI could go like, do you know what a farming sounds nice. Give me a rake.\n\n\n\nOn Slack & IM:\n\nLike it’s, it’s, I’m not saying that email is sort of in its base form is wonderful, but you know what is wonderful asynchronous. Write-ups of cohesive, full thoughts, people using actual goddamn fucking paragraphs to describe ideas and proposals, and they put those paragraphs together into form entire,  cohesive thoughts.\nAnd then letting someone take that in, read those several paragraphs, sit back for more than fucking five minutes. Ponder that. And then respond. \nThat is all lost. Once you move your collaboration to chat, every   person now thinks on a line by line staccato basis and you don’t want the quality of that thinking is low.\n\n\n\ncomputer science is a lot like piano building: just because you’re steinway and sons doesn’t mean you are a piano virtuoso, just like if you’re a great computer scientist, that doesn’t mean you can automatically build great products that people want to use. i identify less with the idea of being a “scientist” and more of a “builder of information systems”. most of software development has nothing to do with the “science” part of computer science. unfortunately, the “celebrated paths” go through computer science.\n\n“law of demeter” -> “practices and principles of universal truths”: fucking SIGH\n\nwhen i read most programs, i am studying 17th century french poetry (“WHAT THE FUCK DID THIS PERSON MEAN?”). it’s less about science than it is about FORENSICS. there is NO empirical truth. we cannot discover “laws” of programming. there are no practices that are just “true”. there is a word for this: when people think that they are doing science wehn they are not (it’s called “pseudoscience”).\n\ndiets are similar to software development methodologies. all you need is the 10 day smoothie cleanse. \n\npeople love to be told how they can “cheat the basics”: there has got to be some grand secret that i just don’t know yet! everything is based on anecdotes! https://www.youtube.com/watch?v=9LfmrkyP81M\n\nall of our codebases have the same feeling of insecurity about code quality, just like we are insecure about code quality. \n\nTDD is the most successful software methodology of all times. \n\n“is it easier to test?” becomes our measure for success and “code quality”, but it turns out this is a really shitty metric and leads to code that involves dependency injection, for example, rather than just USING the damn thing.\n\ntesting is great, but deriving your design from unit tests destroys your system architecture\n\n“you can make anything fast if it doesn’t have to work!” -DHH\n\n“just because something is easy to measure does not mean that it’s important” - Seth Godin\n\ncost !== value\n\nthe only tools that we have are those for SUBJECTIVELY analyzing systems: they are NOT engineering, they are french poetry. it’s great to wear the engineer hat SOME of the time (perf optimizations, for example). but most of the time i am not doing that. i am a software _writer_ most of the time. writing is about clarity, presenting information and motivations in a clear, easy-to-follow manner. clarity is about being succinct without being terse. “if we just shove bigger words into this text, it’ll be better!” NO. more indirection, more third person, these are the things that make TERRIBLE writing. if we put clarity of the codebase above ALL ELSE, all arguments will be settled. what is clarity? clarity of writing is not hard science. you have to develop an EYE for clarity. \n\na lot of programmers think that coming at it from a software engineer way: memorize the patterns, etc. and they will be okay.\n\nNO, you need to READ a lot of software, and WRITE a lot of software. most people do NOT do that. it sounds too simple! just as important as it is to develop your sense of writing by reading a ton of SHIT writing, it’s exactly the same thing for code. you’ll find this is relatively easy (90% of everything is crap). [[in order to be a good writer, you need to be a good reader]]\n\n“unless” keyword in ruby is the same as “if not” but it’s SO MUCH more readable!\n\n“I didn’t have the time to write a short letter, so i wrote a long one instead” - Mark Twain\n\nany piece of code that you write down is a draft! your drafts are so easy to rewrite! you can just DELETE stuff! delete key is the number one key for improving code. if you have something in your mind, you should write it down. all your first drafts are terrible though :) \n\n\nWATCH THE GETTING REAL PAGE PLAYLISTS!!! especially the DHH refactoring ones",
        "active": false
    },
    {
        "id": "programmers are humans: you must appeal to their deeper humanity",
        "content": "[[principles]]",
        "active": false
    },
    {
        "id": "principles",
        "content": "",
        "active": true
    },
    {
        "id": "the creation of software should be pleasurable in and of itself",
        "content": "[[principles]]",
        "active": false
    },
    {
        "id": "software is a machine-executable representation of a mental model",
        "content": "[[principles]]\n",
        "active": false
    },
    {
        "id": "in order to be a good writer, you need to be a good reader",
        "content": "[[principles]]",
        "active": false
    },
    {
        "id": "coding is not the new literacy",
        "content": "[[software is a machine-executable representation of a mental model]]\n\nDespite the good intentions behind the movement to get people to code, both the basic premise and approach are flawed. The movement sits on the idea that \"coding is the new literacy,\" but that takes a narrow view of what literacy really is.\n\nIf you ask google to define literacy it gives a mechanical definition:\n\nthe ability to read and write.\n\nThis is certainly accurate, but defining literacy as interpreting and making marks on a sheet of paper is grossly inadequate. Reading and writing are the physical actions we use to employ something far more important: external, distributable storage for the mind. Being literate isn't simply a matter of being able to put words on the page, it's solidifying our thoughts such that they can be written. Interpreting and applying someone else's thoughts is the equivalent for reading. We call these composition and comprehension. And they are what literacy really is.\n\nCoding is not the fundamental skill\n\nWhen we say that coding is the new literacy, we're arguing that wielding a pencil and paper is the old one. Coding, like writing, is a mechanical act. All we've done is upgrade the storage medium. Writing if statements and for loops is straightforward to teach people, but it doesn't make them any more capable. Just like writing, we have to know how to solidify our thoughts and get them out of our head. In the case of programming though, if we manage to do that in a certain way, a computer can do more than just store them. It can compute with them.\n\nReading and writing gave us external and distributable storage. Coding gives us external and distributable computation. It allows us to offload the thinking we have to do in order to execute some process. To achieve this, it seems like all we need is to show people how to give the computer instructions, but that's teaching people how to put words on the page. We need the equivalent of composition, the skill that allows us to think about how things are computed. This time, we're not recording our thoughts, but instead the models of the world that allow us to have thoughts in the first place.\n\nWe build mental models of everything - from how to tie our shoes to the way macro-economic systems work. With these, we make decisions, predictions, and understand our experiences. If we want computers to be able to compute for us, then we have to accurately extract these models from our heads and record them. Writing Python isn't the fundamental skill we need to teach people. Modeling systems is.\n\nModeling is the new literacy\n\nIn the same way that composition and comprehension are not tied to paper, modeling is not tied to computers. It can be both physical and mental. It takes place on paper and in Excel or with Legos and balsa wood airplanes. It is an incredibly powerful skill which we can make even greater use of by transposing our models to computers. To understand how we do that, we have to look more deeply at what it means to model.\n\nModeling is creating a representation of a system (or process) that can be explored or used. [[representations of systems]]\n\nThis definition encompasses a few skills, but the most important one is specification. In order to represent a system, we have to understand what it is exactly, but our understanding is mired in assumptions. A fun illustration of this is the first time my co-founder, Robert, was trying to sort a list of names and getting frustrated with it. I asked him a simple question: \"What does it actually mean to alphabetize something?\" He had never once considered what that really meant. It was some vague concept that he had a mental model for, but he had never been forced to specify the exact result (for example, what do we do with non-English characters?).1\n\nDefining a system or process requires breaking it down into pieces and defining those, which can then be broken down further. It is a process that helps acknowledge and remove ambiguity and it is the most important aspect of teaching people to model. In breaking parts down we can take something overwhelmingly complex and frame it in terms that we understand and actions we know how to do. The parallel to programming here is very apparent: writing a program is breaking a system down until you arrive at ideas that a computer understands and actions it knows how to do. In either case, we have to specify our system and we do that through a process of iterative crafting.\n\nCreation is exploration\n\nWe create models by crafting them out of material.2 Sometimes our material is wood, metal, or plastic. Other times it's data or information from our senses. Either way, we start our models with a medium that we mold. This helps us escape the trap of the blank page - by starting with a hunk of clay (or data, or some physical motion, or Legos...) we don't have to imagine the leap from nothingness to something. Instead, we can get to work by manipulating what's in front of us. We can hone, and whittle, and bend, and pull apart, and glue. We can shape it as we see fit.\n\nThe process of creating a model is an act of discovery - we find out what pieces we need as we shape our material. This means we needn't fully specify a system to get started, we can simply craft new pieces as we go. We end up exploring the system as we create it and don't have to get a \"complete\" model to gain value. We can simply tinker. We can shave a little off or glue a some on to see what happens. And along the way, we bolster our intuition of how systems behave.\n\nExploration is understanding\n\nPhysical modeling teaches us the value of being able to take things apart, whether that's removing every single screw and laying the whole engine block out on the garage floor or just removing the alternator and having a look. By pulling something apart we can directly explore what makes it up. This is why interfaces in movies like Iron Man are so compelling - they allow us to just dive in.\n\n\nImagine what we could learn if we had the ability to break anything down, to reach inside it, and see what that little bit there does. The more ways we find to represent systems such that we retain that ability, the more power we will have to understand complex things.\n\nWe gain understanding through exploration, through fiddling with models and \"playing them out\" to see what happens. We can make our wheels bigger or plug in a different number for the interest rate and simulate the result. Through this process, we experience and imagine things we might not otherwise be able to, and the more experiences we have, the more we understand how the world works.\n\nDigital freedom\n\nWhile properties of physical modeling are useful to us as guiding principles, the digital world offers us an opportunity to step out of their limitations. We can freely create copies of parts or craft many different versions of them. We can make changes to individual pieces and the system will adapt to them. We can simulate our models in different contexts, while sophisticated tools verify our expectations. By transposing our models to a computer, we can offload the work necessary to change, simulate, and verify. We can even have our models suggest actions and let other systems perform them for us. As such, we free ourselves to explore without every change requiring us to hit the metaphorical machine shop.\n\nThere are a number of tools that already help us do this - from Matlab to Quartz Composer - but Excel is unquestionably the king. Through Excel we can model any system that we can represent as numbers on a grid, which it turns out, is a lot of them. We have modeled everything from entire businesses to markets to family vacations. Millions of people are able to use spreadsheets to model aspects of their lives and it could be argued that, outside of the Internet, it's the single most important tool available to us on a computer. It gains this power by providing a simple and intuitive set of tools for shaping just one material: a grid of numbers. If we want to work with more than that, however, we have to code.\n\nA fundamental disconnect\n\nCoding requires us to break our systems down into actions that the computer understands, which represents a fundamental disconnect in intent. Most programs are not trying to specify how things are distributed across cores or how objects should be laid out in memory. We are not trying to model how a computer does something.3 Instead, we are modeling human interaction, the weather, or spacecraft. From that angle, it's like trying to paint using a welder's torch. We are employing a set of tools designed to model how computers work, but we're representing systems that are nothing like them.4\n\nEven in the case where we are talking specifically about how machines should behave, our tools aren't really designed with the notion of modeling in mind. Our editors and debuggers, for example, make it difficult to pick out pieces at different depths of abstraction. Instead, we have to look at the system laid out in its entirety and try to make sense of where all the screws came from. Most mainstream languages also make exploratory creation difficult. Exploring a system as we're building it gives us a greater intuition for both what we have and what we need. This is why languages that were designed with exploration in mind (LISP, Smalltalk, etc) seem magical and have cult followings. But even these suffer from forcing us to model every material with a single tool. Despite having different tools for various physical materials, in programming we try to build nearly everything with just one: the general purpose programming language.\n\nOn the surface, it seems desirable to have \"one tool to rule them all,\" but the reality is that we end up trying to hammer metal with a chef's knife.5 Excel, by contrast, constrains us to the single material that it was intentionally designed to work with. Through that constraint we gain a tool with a very intuitive and powerful interface for working with grids. The problem of course is that Excel is terrible for doing anything else, but that doesn't mean we should try to generalize a chef's knife into a hammer. Instead, we should use the right tools for the job and look for a glue that allows us to bring different materials together.6\n\nProgramming as it exists now forces us to model, but it does so in an unnatural way. And while teaching ourselves how to program will help us learn how to break systems down, it does so at the risk of focusing on the wrong things.7 We don't want a generation of people forced to care about Unicode and UI toolkits. We want a generation of writers, biologists, and accountants that can leverage computers.\n\nHow we teach children\n\nWe are natural-born modelers and we learn by creating representations that we validate against the world. Our models often start out too simplistic or even obviously wrong, but that's perfectly acceptable (and arguably necessary8), as we can continue to update them as we go. Any parent could give you examples of how this plays out in their children, though they may not have fully internalized that this is what's happening. A great example is that infants initially have a model of existence that relies on seeing objects. This is why not being able to see their parents is so distressing - it means that they no longer exist.9 The notion of object permanence is something that children only fully develop after a couple years of honing their model for how physical objects behave.\n\nSo if we do this naturally, what do we have to teach children? The magic of instinct is that we don't have to be aware of how it actually happens. We understand the world through models, but that doesn't mean we know how we create them in the first place. As such, we have to teach children how modeling happens,10 which we can break down into four distinct processes:\n\nSpecification: How to break down parts until you get to ideas and actions you understand.\n\nValidation: How to test the model against the real world or against the expectations inside our heads.\n\nDebugging: How to break down bugs in a model. A very important lesson is that an invalid model is not failure, it just shows that some part of the system behaves differently than what we modeled.\n\nExploration: How to then play with the model to better understand possible outcomes and to see how it could be used to predict or automate some system.\n\nFocusing on these four areas captures the basic process by which we create, hone, and use models and it allows children to become active participants in the process by which they learn. Perhaps even more importantly, focusing on modeling pushes education towards the idea that pedagogy is really guiding children to deliberately create and explore the world around them.11\n\nHow we should teach adults\n\nRealistically, we should be teaching ourselves the same things, but unfortunately adult education rarely allows for undirected exploration (we're just trying to get something done). Instead, we could frame modeling in terms of how we might use models in context. For example, if you're an accountant that goes through the same process every day to create a report, you could break it down to see how you might automate portions of it. What are the fundamental actions necessary to create that report? Are there tools that can do those actions for you?\n\nIf we assume that at some point better tools for modeling come into existence12, then being able to model some system or process may be all you need to automate it. Once that is the case, a targeted exploration of how you go about modeling specific domains has obvious value as it frees us up to do other tasks. An extreme example of this might be modeling your entire business, from the interactions with customers to fulfillment. At that point you could automate large portions of it and focus on how to grow the business, which itself likely involves exploratory models.\n\n\"The computer revolution hasn't happened yet\"\n\nAlan Kay did a talk at OOPSLA in 1997 titled \"The computer revolution hasn't happened yet,\" in which he argued that we haven't realized the potential that computers can provide for us. Eighteen years later, I still agree with him - it hasn't happened yet. And teaching people how to loop over a list won't make it happen either. To realize the potential of computers, we have to focus on the fundamental skills that allow us to harness external computation. We have to create a new generation of tools that allow us to express our models without switching professions and a new generation of modelers who wield them.\n\nTo put it simply, the next great advance in human ability comes from being able to externalize the mental models we spend our entire lives creating.\n\nThat is the new literacy. And it's the revolution we've all been waiting for.\n\nThis is used as an argument for why programming can never be made easier. At best, you could potentially say that specification is fundamentally difficult and as such modeling cannot be made easier. Programming currently requires much more than just modeling though, and there's a great deal of room for improvement in the other areas. Moreover, we have primitive tools for modeling at this point, so there's plenty of opportunity there as well. ↩\n\nThis notion of material comes up in a number of places. Bret Victor's latest talk discusses creating a \"dynamic material.\" Papert also talks about how the materials we have at our disposal greatly influence how we think about the world in the beginning of Mindstorms. There's some important idea about how what we have to work with dictates what we are able to think. ↩\n\nAt least not anymore. When we were working on the foundations of computing our focus really did have to be at this level, but if we're talking about democratizing the ability to control a computer, we can't expect people to become experts in hardware architecture. The focus has to shift from \"how do we make these things work\" to \"how do we do x with them\". ↩\n\nYou learn a lot from the metaphors used in different domains. I talk about material, but in programming we have \"modules.\" Modules are plug and play, which means that they either have to provide for every possibility or you work around them. In many ways, the idea that we can reuse components without having to change them (or that we can account for all the variances) has caused us more harm than good. Models are made of material, which means they can still be adjusted and honed - they are just a starting point. It seems like that would be a much better way of looking at reuse in systems. We start with something that's most of the way there and instead of trying to account for every possibility, we just allow for people to reshape it as they see fit. ↩\n\nNo one tool will cover every model we want to build, but it may be possible to come up with a small set of mechanisms from which all others could be built. We see this in the physical world with the simple machines. Nearly every tool we use to shape wood, for example, is made from a wedge. The problem is that in the software industry we never made the leap from wedge to saw. ↩\n\nExploring possible solutions for how we would model using different tools is outside of the scope of this essay, but it's the basic premise of our work on Eve. The gist is that we think the glue is a language for exploring and translating data from different domains. We then couple that with a system capable of taking data and doing computery things with it (sending it over the network, showing UI, etc). The tools sit on top of this foundation and you model directly in your domain. It's then up to the system to figure out how to execute the results of the models. ↩\n\nForcing kids to take classes that focus on general purpose programming runs a very serious risk; it might end up like math education. Programming is only meaningful when put into the context of problems we actually have, otherwise we're showing people the moral equivalent of calculus - \"what's the point of this crap?\" This is not to say we shouldn't have general programming classes, it's just that forcing it on kids won't have the desired effect. ↩\n\nThere's an argument that in order for us to really learn something, we have to go through a series of invalid models to internalize what would initially be unintuitive about the world. While much of nature presents itself simply, there's almost always a set of complex systems under the covers that wouldn't make sense based purely on intuition. As Carl Sagan said, \"The simplest thought, like the concept of the number one, has an elaborate logical underpinning.\" ↩\n\nI saw a hilarious (and somewhat mean) example of this walking around San Francisco. There was a family with a 2ish year old son walking down the sidewalk holding hands. The father let go of his son's hand and ducked behind a pole. As soon as he was no longer in sight, the little boy started crying. The father stepped from behind the pole and the child stopped. He repeated this several times and every single time the son couldn't see his father, he wailed. What a different world that must be. ↩\n\nIt was pointed out to me that there's actually an example of this in modern education: the first time you're graded not just for getting the right answer in a math class, but for also showing your work. By forcing people to show their work, you're forcing them to internalize how their model for some mathematical principle works. It's not the most direct way to teach modeling, but it is at least landing in the same ballpark. ↩\n\nFor more about this you really should just go read Mindstorms. ↩\n\nAnd this is exactly what we're working on with Eve. ↩\n\n",
        "active": false
    },
    {
        "id": "representations of systems",
        "content": "",
        "active": false
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/crabl/Experiments/idea-book/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map