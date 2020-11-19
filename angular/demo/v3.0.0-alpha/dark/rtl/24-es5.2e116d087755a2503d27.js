!function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{alDA:function(r,n,a){"use strict";a.r(n),a.d(n,"ValidationFormsModule",(function(){return T}));var o,i=a("SVse"),l=a("s7LF"),s=a("Iluq"),m=a("iInd"),d=a("8Y7J"),c=((o=function e(){t(this,e),this.formRules={nonEmpty:"^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$",usernameMin:5,passwordMin:6,passwordPattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"},this.formErrors={firstName:"",lastName:"",username:"",email:"",password:"",confirmPassword:"",accept:!1},this.errorMessages={firstName:{required:"First name is required"},lastName:{required:"Last name is required"},username:{required:"Username is required",minLength:"'Username must be ".concat(this.formRules.usernameMin," characters or more"),pattern:"Must contain letters and/or numbers, no trailing spaces"},email:{required:"required",email:"Invalid email address"},password:{required:"Password is required",pattern:"Password must contain: numbers, uppercase and lowercase letters",minLength:"Password must be at least ".concat(this.formRules.passwordMin," characters")},confirmPassword:{required:"Password confirmation is required",passwordMismatch:"Passwords must match"},accept:{requiredTrue:"You have to accept our Terms and Conditions"}}}).\u0275fac=function(e){return new(e||o)},o.\u0275prov=d["\u0275\u0275defineInjectable"]({token:o,factory:o.\u0275fac,providedIn:"root"}),o);function u(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1,"First Name is required"),d["\u0275\u0275elementEnd"]())}function p(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",30),d["\u0275\u0275template"](1,u,2,0,"div",31),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.firstName.errors.required)}}function f(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1,"Last Name is required"),d["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",30),d["\u0275\u0275template"](1,f,2,0,"div",31),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.lastName.errors.required)}}function b(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1,"Username is required"),d["\u0275\u0275elementEnd"]())}function h(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](r.formErrors.username.minLength)}}function g(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](r.formErrors.username.pattern)}}function x(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",30),d["\u0275\u0275template"](1,b,2,0,"div",31),d["\u0275\u0275template"](2,h,2,1,"div",31),d["\u0275\u0275template"](3,g,2,1,"div",31),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.username.errors.required),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.username.errors.minlength),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.username.errors.pattern)}}function E(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1,"Email is required"),d["\u0275\u0275elementEnd"]())}function S(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](r.formErrors.email.email)}}function w(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",30),d["\u0275\u0275template"](1,E,2,0,"div",31),d["\u0275\u0275template"](2,S,2,1,"div",31),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.email.errors.required),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.email.errors.email)}}function y(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1,"Password is required"),d["\u0275\u0275elementEnd"]())}function C(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](r.formErrors.password.minLength)}}function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](r.formErrors.password.pattern)}}function F(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",30),d["\u0275\u0275template"](1,y,2,0,"div",31),d["\u0275\u0275template"](2,C,2,1,"div",31),d["\u0275\u0275template"](3,I,2,1,"div",31),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.password.errors.required),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.password.errors.minlength),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.password.errors.pattern)}}function q(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate"](r.formErrors.confirmPassword.passwordMismatch)}}function N(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",30),d["\u0275\u0275template"](1,q,2,1,"div",31),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.simpleForm.errors.passwordMismatch)}}function V(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275text"](1,"You have to accept our Terms and Conditions"),d["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"c-form-feedback",32),d["\u0275\u0275template"](1,V,2,0,"div",31),d["\u0275\u0275elementEnd"]()),2&e){var r=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("valid",!1),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",r.f.accept.errors.required)}}var P,M,L,R=function(e,t){return{"is-invalid":e,"is-valid":t}},j=function(e){return{"bg-info":e}},A=function(e){var t=e.get("password"),r=e.get("confirmPassword");return t&&r&&t.value===r.value?null:{passwordMismatch:!0}},U=((P=function(){function r(e,n){t(this,r),this.fb=e,this.vf=n,this.submitted=!1,this.formErrors=this.vf.errorMessages,this.createForm()}var n,a,o;return n=r,(a=[{key:"createForm",value:function(){this.simpleForm=this.fb.group({firstName:["",[l.Validators.required]],lastName:["",[l.Validators.required]],username:["",[l.Validators.required,l.Validators.minLength(this.vf.formRules.usernameMin),l.Validators.pattern(this.vf.formRules.nonEmpty)]],email:["",[l.Validators.required,l.Validators.email]],password:["",[l.Validators.required,l.Validators.minLength(this.vf.formRules.passwordMin),l.Validators.pattern(this.vf.formRules.passwordPattern)]],confirmPassword:["",[l.Validators.required]],accept:[!1,[l.Validators.requiredTrue]]},{validator:A})}},{key:"onReset",value:function(){this.submitted=!1,this.simpleForm.reset()}},{key:"onValidate",value:function(){return this.submitted=!0,"VALID"===this.simpleForm.status}},{key:"onSubmit",value:function(){console.warn(this.onValidate(),this.simpleForm.value),this.onValidate()&&(console.warn(this.simpleForm.value),alert("SUCCESS!"))}},{key:"f",get:function(){return this.simpleForm.controls}}])&&e(n.prototype,a),o&&e(n,o),r}()).\u0275fac=function(e){return new(e||P)(d["\u0275\u0275directiveInject"](l.FormBuilder),d["\u0275\u0275directiveInject"](c))},P.\u0275cmp=d["\u0275\u0275defineComponent"]({type:P,selectors:[["ng-component"]],features:[d["\u0275\u0275ProvidersFeature"]([c])],decls:82,vars:54,consts:[[1,"fade-in"],["md","12"],["href","https://coreui.io/pro/",1,"badge","badge-danger"],["href","https://angular.io/guide/form-validation","target","_blank",1,"card-header-action"],[1,"text-muted"],["md","6"],["novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],["for","firstName",1,"col-form-label"],["cInput","","id","firstName","formControlName","firstName","placeholder","First name","autocomplete","given-name","required","",3,"autofocus","ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName",1,"col-form-label"],["cInput","","id","lastName","formControlName","lastName","placeholder","Last name","autocomplete","family-name","required","",3,"ngClass"],["for","username",1,"col-form-label"],["cInput","","id","username","formControlName","username","placeholder","Username","autocomplete","username","required","",3,"ngClass"],["for","email",1,"col-form-label"],["cInput","","id","email","type","email","formControlName","email","placeholder","Email","autocomplete","email","required","",3,"ngClass"],["cCol","","md","6"],["for","password",1,"col-form-label"],["cInput","","id","password","type","password","formControlName","password","placeholder","Password","autocomplete","new-password","required","",3,"ngClass"],["for","confirmPassword",1,"col-form-label"],["cInput","","id","confirmPassword","type","password","formControlName","confirmPassword","placeholder","Confirm password","autocomplete","new-password","required","",3,"ngClass"],["variant","checkbox","custom",""],["cInput","","custom","","type","checkbox","id","accept","formControlName","accept","required","",3,"ngClass"],["cLabel","","custom","","for","accept"],[3,"valid",4,"ngIf"],["cButton","","color","primary","type","submit",1,"mfe-1",3,"disabled","tabindex"],["cButton","","color","success",1,"mfe-1",3,"disabled","tabindex","click"],["cButton","","color","danger","type","reset",3,"tabindex","click"],[1,"bg-dark",3,"ngClass"],[1,"text-white"],[1,"invalid-feedback"],[4,"ngIf"],[3,"valid"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"c-row"),d["\u0275\u0275elementStart"](2,"c-col",1),d["\u0275\u0275elementStart"](3,"c-card"),d["\u0275\u0275elementStart"](4,"c-card-header"),d["\u0275\u0275text"](5," Form Validation "),d["\u0275\u0275elementStart"](6,"a",2),d["\u0275\u0275text"](7,"CoreUI Pro"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](8,"c-card-header-actions"),d["\u0275\u0275elementStart"](9,"a",3),d["\u0275\u0275elementStart"](10,"small",4),d["\u0275\u0275text"](11,"docs"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"c-card-body"),d["\u0275\u0275text"](13,"Angular Form Validation "),d["\u0275\u0275element"](14,"hr"),d["\u0275\u0275elementStart"](15,"c-row"),d["\u0275\u0275elementStart"](16,"c-col",5),d["\u0275\u0275elementStart"](17,"h6"),d["\u0275\u0275text"](18,"Simple Form"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"form",6),d["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),d["\u0275\u0275elementStart"](20,"c-form-group"),d["\u0275\u0275elementStart"](21,"label",7),d["\u0275\u0275text"](22,"First name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](23,"input",8),d["\u0275\u0275template"](24,p,2,1,"div",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"c-form-group"),d["\u0275\u0275elementStart"](26,"label",10),d["\u0275\u0275text"](27,"Last name"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](28,"input",11),d["\u0275\u0275template"](29,v,2,1,"div",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](30,"c-form-group"),d["\u0275\u0275elementStart"](31,"label",12),d["\u0275\u0275text"](32,"Username"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](33,"input",13),d["\u0275\u0275template"](34,x,4,3,"div",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](35,"c-form-group"),d["\u0275\u0275elementStart"](36,"label",14),d["\u0275\u0275text"](37,"Email"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](38,"input",15),d["\u0275\u0275template"](39,w,3,2,"div",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](40,"c-row"),d["\u0275\u0275elementStart"](41,"c-form-group",16),d["\u0275\u0275elementStart"](42,"label",17),d["\u0275\u0275text"](43,"Password"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](44,"input",18),d["\u0275\u0275template"](45,F,4,3,"div",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](46,"c-form-group",16),d["\u0275\u0275elementStart"](47,"label",19),d["\u0275\u0275text"](48,"Confirm password"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](49,"input",20),d["\u0275\u0275template"](50,N,2,1,"div",9),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](51,"c-form-group"),d["\u0275\u0275elementStart"](52,"c-form-check",21),d["\u0275\u0275element"](53,"input",22),d["\u0275\u0275elementStart"](54,"label",23),d["\u0275\u0275text"](55,"I accept the terms of use"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](56,k,2,2,"c-form-feedback",24),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](57,"c-form-group"),d["\u0275\u0275elementStart"](58,"button",25),d["\u0275\u0275text"](59,"Submit"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](60,"button",26),d["\u0275\u0275listener"]("click",(function(){return t.onValidate()})),d["\u0275\u0275text"](61,"Validate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](62,"button",27),d["\u0275\u0275listener"]("click",(function(){return t.onReset()})),d["\u0275\u0275text"](63,"Reset"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](64,"c-col",5),d["\u0275\u0275elementStart"](65,"c-card",28),d["\u0275\u0275elementStart"](66,"c-card-body"),d["\u0275\u0275elementStart"](67,"pre",29),d["\u0275\u0275text"](68,"Value: "),d["\u0275\u0275elementStart"](69,"code"),d["\u0275\u0275text"](70),d["\u0275\u0275pipe"](71,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](72,"ul"),d["\u0275\u0275elementStart"](73,"li"),d["\u0275\u0275text"](74),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](75,"li"),d["\u0275\u0275text"](76),d["\u0275\u0275pipe"](77,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](78,"li"),d["\u0275\u0275text"](79),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](80,"li"),d["\u0275\u0275text"](81),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](19),d["\u0275\u0275property"]("formGroup",t.simpleForm),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("autofocus",!0)("ngClass",d["\u0275\u0275pureFunction2"](31,R,(t.submitted||t.f.firstName.touched)&&t.f.firstName.invalid,t.f.lastName.touched&&t.f.firstName.valid)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.firstName.invalid),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction2"](34,R,(t.submitted||t.f.lastName.touched)&&t.f.lastName.invalid,t.f.lastName.touched&&t.f.lastName.valid)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.lastName.invalid),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction2"](37,R,(t.submitted||t.f.username.touched)&&t.f.username.errors,t.f.username.touched&&!t.f.username.errors)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.username.errors),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction2"](40,R,(t.submitted||t.f.email.touched)&&t.f.email.invalid,t.f.email.touched&&t.f.email.valid)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.email.invalid),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction2"](43,R,(t.submitted||t.f.password.touched)&&t.f.password.invalid,t.f.password.touched&&t.f.password.valid)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.password.invalid),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction2"](46,R,t.submitted&&t.simpleForm.errors,t.f.confirmPassword.touched&&!t.simpleForm.errors)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngIf",t.submitted&&t.simpleForm.errors),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction2"](49,R,t.submitted&&t.f.accept.invalid,t.f.accept.valid)),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngIf",t.submitted&&t.f.accept.invalid),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("disabled",t.simpleForm.pristine||t.simpleForm.invalid)("tabindex","0"),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("disabled",t.simpleForm.valid)("tabindex","0"),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tabindex","0"),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](52,j,t.simpleForm.valid)),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](71,27,t.simpleForm.value)),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"](" Status: ",t.simpleForm.status," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" Errors: ",d["\u0275\u0275pipeBind1"](77,29,t.simpleForm.errors)," "),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" Valid: ",t.simpleForm.valid," "),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" Pristine: ",t.simpleForm.pristine," "))},directives:[s.Cb,s.Eb,s.sc,s.wc,s.xc,s.tc,l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,s.rb,l.DefaultValueAccessor,s.tb,l.NgControlStatus,l.FormControlName,l.RequiredValidator,i.l,i.n,s.Fb,s.pb,l.CheckboxControlValueAccessor,l.CheckboxRequiredValidator,s.Ab,s.oc,s.qb],pipes:[i.h],styles:[".btn[_ngcontent-%COMP%]:disabled{cursor:auto}"]}),P),_=[{path:"",component:U,data:{title:"Form Validation"}}],B=((L=function e(){t(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},imports:[[m.g.forChild(_)],m.g]}),L),T=((M=function e(){t(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:M,bootstrap:[U]}),M.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||M)},providers:[],imports:[[l.FormsModule,i.c,l.ReactiveFormsModule,B,s.r,s.h,s.f,s.c,s.q]]}),M)}}])}();