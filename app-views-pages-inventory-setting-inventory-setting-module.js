(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-inventory-setting-inventory-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/create-loc/create-loc.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory-setting/create-loc/create-loc.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet> \n                    <kt-portlet-header title=\"Ajouter un Emplacement\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <form class=\"kt-form\" [formGroup]=\"emplForm\">\n                        \n                        <div class=\"row\"> \n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Site: *</label>\n                                <div class=\"col-2\">\n                                    <input  class =\"form-control-sm\" type=\"text\" [className]=\"emplForm.controls['site'].errors && (emplForm.controls['site'].dirty || emplForm.controls['site'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"site \"\n                                    #site formControlName=\"site\" required id=\"site\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"emplForm.controls['site'].errors && (emplForm.controls['site'].dirty || emplForm.controls['site'].touched)\">\n                                        </div>\n                                </div>\n                                <div *ngIf=\"emplForm.controls['site'].errors.required\" class=\"invalid-feedback\">Le site est obligatoire</div>\n                                   \n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectstatus(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n\n                            </div>\n\n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Emplacement: *</label>\n                                <div class=\"col-2\">\n                                    <input  class =\"form-control-sm\" type=\"text\" [className]=\"emplForm.controls['empl'].errors && (emplForm.controls['empl'].dirty || emplForm.controls['empl'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Emplacement\"\n                                    #empl formControlName=\"empl\" required id=\"empl\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"emplForm.controls['empl'].errors && (emplForm.controls['empl'].dirty || emplForm.controls['empl'].touched)\">\n                                        </div>\n                                </div>\n                                <div *ngIf=\"emplForm.controls['empl'].errors.required\" class=\"invalid-feedback\">L'Emplacement est obligatoire</div>\n                                   \n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectstatus(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n\n                            </div>\n\n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Description: *</label>\n                                <div class=\"col-lg-9\">\n                                    <input  class =\"form-control-sm\" type=\"text\" [className]=\"emplForm.controls['description'].errors && (emplForm.controls['description'].dirty || emplForm.controls['description'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Description du compte\"\n                                    #description formControlName=\"description\" required id=\"description\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"emplForm.controls['description'].errors && (emplForm.controls['description'].dirty || emplForm.controls['description'].touched)\">\n                                    </div>\n                                    <div *ngIf=\"emplForm.controls['description'].errors.required\" class=\"invalid-feedback\">La description est obligatoire</div>\n                                    \n                                </div>\n                            </div>\n                            \n                            \n                            \n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Status: *</label>\n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\" [className]=\"emplForm.controls['status'].errors && (emplForm.controls['status'].dirty || emplForm.controls['status'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"\"\n                                    #status formControlName=\"status\" required id=\"status\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"emplForm.controls['status'].errors && (emplForm.controls['status'].dirty || emplForm.controls['status'].touched)\">\n\n                                    </div>\n                                    <div *ngIf=\"emplForm.controls['status'].errors.required\" class=\"invalid-feedback\">Le Status est obligatoire</div>\n\n\n                                </div>\n\n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectstatus(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n                            </div>   \n\n\n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Projet: *</label>\n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\" [className]=\"emplForm.controls['projet'].errors && (emplForm.controls['projet'].dirty || emplForm.controls['projet'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Entité\"\n                                    #projet formControlName=\"projet\" required id=\"projet\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"emplForm.controls['projet'].errors && (emplForm.controls['projet'].dirty || emplForm.controls['projet'].touched)\">\n\n                                    </div>\n                                    <div *ngIf=\"emplForm.controls['projet'].errors.required\" class=\"invalid-feedback\">Le compte est obligatoire</div>\n\n\n                                </div>\n\n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectprojet(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n                            </div>    \n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Permanent: *</label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"Permanent\" formControlName=\"permanent\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n\n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Type: * </label>\n                                <div class=\"col-2\">\n                                    <select  class =\"form-control-sm\" type=\"text\" [className]=\"emplForm.controls['type'].errors && (emplForm.controls['type'].dirty || emplForm.controls['type'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Type du compte\"\n                                       #type formControlName=\"type\" required id=\"type\" >\n                                       <option *ngFor=\"let object of typeList\" [value]=\"object.id\">{{object.description}}</option>\n                                    </select>\n                                    <div class=\"form-control-feedback\" *ngIf=\"emplForm.controls['type'].errors && (emplForm.controls['type'].dirty || emplForm.controls['type'].touched)\">\n                                    </div>\n                                    <div *ngIf=\"emplForm.controls['type'].errors.required\" class=\"invalid-feedback\">Le Type est obligatoire</div>\n                                    \n                                </div>\n                            </div>\n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Article Unique: </label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"articleunique\" formControlName=\"articleunique\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Lot/Référence Unique: </label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"lotunique\" formControlName=\"lotunique\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n\n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Capacité:  </label>\n                                <div class=\"col-2\">\n                                    <input type=\"number\" class=\"form-control form-control-sm\" placeholder=\"0\" formControlName=\"capacite\">\n                                    \n                                </div>\n                                \n                                <label class=\"col-2 col-form-label text-right\">UM:  </label>\n                                <div class=\"col-2\">\n                                    <input type=\"text\" class=\"form-control form-control-sm\" placeholder=\"\" formControlName=\"UM\">\n                                    \n                                </div>\n                            </div>\n\n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Emplacement Réservé: </label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"emplreserve\" formControlName=\"emplreserve\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Transfert de Propriété: </label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"transfp\" formControlName=\"transfp\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n\n                            <div class=\"kt-login__actions\">\n                                <button (click)=\"submit()\" [className]=\"loading ? 'btn btn-primary btn-elevate kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light' : 'btn btn-primary btn-elevate kt-login__btn-primary'\">Ajouter Emplacement</button>\n                            </div>\n                        </div>    \n                        </form>\n                        \n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n\n        </div>\n    </div>\n\n</div> \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/create-site/create-site.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory-setting/create-site/create-site.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet> \n                    <kt-portlet-header title=\"Ajouter un Site\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <form class=\"kt-form\" [formGroup]=\"siteForm\">\n                        \n                        <div class=\"row\"> \n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Code: *</label>\n                                <div class=\"col-2\">\n                                    <input  class =\"form-control-sm\" type=\"text\" [className]=\"siteForm.controls['code'].errors && (siteForm.controls['code'].dirty || siteForm.controls['code'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Code du compte\"\n                                    #code formControlName=\"code\" required id=\"code\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"siteForm.controls['code'].errors && (siteForm.controls['code'].dirty || siteForm.controls['code'].touched)\">\n                                        </div>\n                                </div>\n                                <div *ngIf=\"siteForm.controls['code'].errors.required\" class=\"invalid-feedback\">Le code est obligatoire</div>\n                                    \n                            </div>\n\n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Description: *</label>\n                                <div class=\"col-lg-9\">\n                                    <input  class =\"form-control-sm\" type=\"text\" [className]=\"siteForm.controls['description'].errors && (siteForm.controls['description'].dirty || siteForm.controls['description'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Description du compte\"\n                                    #description formControlName=\"description\" required id=\"description\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"siteForm.controls['description'].errors && (siteForm.controls['description'].dirty || siteForm.controls['description'].touched)\">\n                                    </div>\n                                    <div *ngIf=\"siteForm.controls['description'].errors.required\" class=\"invalid-feedback\">La description est obligatoire</div>\n                                    \n                                </div>\n                            </div>\n                            \n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Entité: *</label>\n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\" [className]=\"siteForm.controls['status'].errors && (siteForm.controls['status'].dirty || siteForm.controls['status'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"Entité\"\n                                    #status formControlName=\"status\" required id=\"status\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"siteForm.controls['status'].errors && (siteForm.controls['status'].dirty || siteForm.controls['status'].touched)\">\n\n                                    </div>\n                                    <div *ngIf=\"siteForm.controls['status'].errors.required\" class=\"invalid-feedback\">Le compte est obligatoire</div>\n\n\n                                </div>\n\n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectstatus(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n                            </div>    \n\n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Déclarant: *</label>\n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\" [className]=\"siteForm.controls['status'].errors && (siteForm.controls['status'].dirty || siteForm.controls['status'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"\"\n                                    #status formControlName=\"status\" required id=\"status\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"siteForm.controls['status'].errors && (siteForm.controls['status'].dirty || siteForm.controls['status'].touched)\">\n\n                                    </div>\n                                    <div *ngIf=\"siteForm.controls['status'].errors.required\" class=\"invalid-feedback\">Le champ est obligatoire</div>\n\n\n                                </div>\n\n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectstatus(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n                            </div>    \n\n                            \n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Status par Défaut: *</label>\n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\" [className]=\"siteForm.controls['status'].errors && (siteForm.controls['status'].dirty || siteForm.controls['status'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"\"\n                                    #status formControlName=\"status\" required id=\"status\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"siteForm.controls['status'].errors && (siteForm.controls['status'].dirty || siteForm.controls['status'].touched)\">\n\n                                    </div>\n                                    <div *ngIf=\"siteForm.controls['status'].errors.required\" class=\"invalid-feedback\">Le Status est obligatoire</div>\n\n\n                                </div>\n\n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectstatus(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n                            </div>   \n\n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Création Automatique: *</label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"autocreate\" formControlName=\"autocreate\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n                            \n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Compte Ecart Transfert: </label>\n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\" [className]=\"siteForm.controls['cetrans'].errors && (siteForm.controls['cetrans'].dirty || siteForm.controls['cetrans'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"compte stock\"\n                                    #cetrans formControlName=\"cetrans\" required id=\"cetrans\" >\n                                    <div class=\"form-control-feedback\" *ngIf=\"siteForm.controls['cetrans'].errors && (siteForm.controls['cetrans'].dirty || siteForm.controls['cetrans'].touched)\">\n                                        \n                                    </div>\n                                    <div *ngIf=\"siteForm.controls['cetrans'].errors.required\" class=\"invalid-feedback\">Le compte est obligatoire</div>\n                                \n                                \n                                </div>\n\n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectproductligne(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n\n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\"  placeholder=\"sous compte\" formControlName=\"scetrans\" >\n                                </div>\n                                \n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectproductligne(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n                                \n                                <div class=\"col-2\">\n                                    <input  class=\"form-control form-control-sm\" type=\"text\"  placeholder=\"centre cout\" formControlName=\"ccetrans\" >\n                                \n                                </div>\n                                \n                                <div class=\"col-1\">\n                                    <button type=\"button\" (click)=\"selectproductligne(content)\" class=\"form-control form-control-sm btn-danger  btn-circle btn-icon\"><i class=\"icon-2x text-dark-50 flaticon2-magnifier-tool\"></i></button>\n                                </div>\n                                \n                            </div>\n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Transfert De Propriété: *</label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"trans\" formControlName=\"trans\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n\n\n\n                        </div>\n                        <div class=\"kt-login__actions\">\n                            <button (click)=\"submit()\" [className]=\"loading ? 'btn btn-primary btn-elevate kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light' : 'btn btn-primary btn-elevate kt-login__btn-primary'\">Ajouter Site</button>\n                        </div>\n\n                        </form>\n                    \n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n\n        </div>\n    </div>\n\n</div> \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <div class=\"row row-full-height\">\n            <div class=\"col-xl-12\">\n                <kt-portlet> \n                    <kt-portlet-header title=\"Ajouter un Status Stock>\" [class]=\"'kt-portlet__head--lg'\">\n                    </kt-portlet-header>\n                    <kt-portlet-body>\n                        <form class=\"kt-form\" [formGroup]=\"statusForm\">\n                        \n                        <div class=\"row\"> \n                            <div class=\"form-group col-12 row\">\n                                <label class=\"col-2 col-form-label text-right\">Status: *</label>\n                                <div class=\"col-2\">\n                                    <input  class =\"form-control-sm\" type=\"text\" [className]=\"statusForm.controls['status'].errors && (statusForm.controls['status'].dirty || statusForm.controls['status'].touched) ? 'form-control form-control-sm is-invalid' : 'form-control form-control-sm'\" placeholder=\"status \"\n                                    #status formControlName=\"status\" required id=\"status\">\n                                    <div class=\"form-control-feedback\" *ngIf=\"statusForm.controls['status'].errors && (statusForm.controls['status'].dirty || statusForm.controls['status'].touched)\">\n                                        </div>\n                                </div>\n                                <div *ngIf=\"statusForm.controls['status'].errors.required\" class=\"invalid-feedback\">Le status est obligatoire</div>\n                                   \n                                \n\n                            </div>\n\n                                                      \n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Disponible: </label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"disponible\" formControlName=\"disponible\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Géré MRP: </label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"mrp\" formControlName=\"mrp\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n                            <div class=\"form-group col-12 row\">\n                            \n                                <label class=\"col-2 col-form-label text-right\"> Sortie Excédent: </label>\n                                <div class=\"col-lg-2\">\n                                    <span class=\"kt-switch kt-switch--outline kt-switch--icon \">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"sortie\" formControlName=\"sortie\">\n                                            <span></span>\n                                    </label>\n                                    </span>\n                                </div>\n                            \n\n\n                            </div> \n\n\n\n                            \n                            \n                               \n\n\n\n                                <div class=\"kt-login__actions\">\n                                    <button (click)=\"submit()\" [className]=\"loading ? 'btn btn-primary btn-elevate kt-login__btn-primary kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light' : 'btn btn-primary btn-elevate kt-login__btn-primary'\">Ajouter Status</button>\n                                </div>\n                            \n\n\n                                <div class=\"card-body\">\n                                                        <!--begin: Datatable-->\n                                                        <div id=\"kt_datatable_wrapper\" class=\"dataTables_wrapper dt-bootstrap4 no-footer\"><div class=\"row\"><div class=\"col-sm-12\">\n                                                        <table class=\"table table-bordered table-checkable dataTable no-footer dtr-inline collapsed\" id=\"kt_datatable\" role=\"grid\" aria-describedby=\"kt_datatable_info\" style=\"width: 1229px;\">\n                                                                <thead>\n                                                                    <tr role=\"row\">\n                                                                    <th class=\"sorting_desc\" tabindex=\"0\" aria-controls=\"kt_datatable\" rowspan=\"1\" colspan=\"1\" style=\"width: 38px;\" aria-sort=\"descending\" aria-label=\"Order ID: activate to sort column ascending\">Order ID</th>\n                                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"kt_datatable\" rowspan=\"1\" colspan=\"1\" style=\"width: 58px;\" aria-label=\"Country: activate to sort column ascending\">Country</th>\n                                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"kt_datatable\" rowspan=\"1\" colspan=\"1\" style=\"width: 77px;\" aria-label=\"Ship City: activate to sort column ascending\">Ship City</th>\n                                                                    <th class=\"sorting\" tabindex=\"0\" aria-controls=\"kt_datatable\" rowspan=\"1\" colspan=\"1\" style=\"width: 82px;\" aria-label=\"Ship Address: activate to sort column ascending\">Ship Address</th></tr>\n                                                                </thead>\n                                                                <tbody>\n                            \n                                \n                                                                    <tr role=\"row\" class=\"odd\">\n                                                    \n                                                                            <td class=\"sorting_1\">76328-333</td>\n                                                                            <td>Portugal</td>\n                                                                            <td>Sobreira</td>\n                                                                            <td>6715 Dakota Parkway</td>\n                                    \n                                                                    </tr>\n                                                                </tbody>\n                                                        </table>\n                                                    </div>\n                                                        <div class=\"row\"><div class=\"col-sm-12 col-md-5\"><div class=\"dataTables_info\" id=\"kt_datatable_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 50 entries</div>\n                                                        </div></div>\n                                                        <div class=\"col-sm-12 col-md-7 dataTables_pager\"><div class=\"dataTables_length\" id=\"kt_datatable_length\"><label>Display <select name=\"kt_datatable_length\" aria-controls=\"kt_datatable\" class=\"custom-select custom-select-sm form-control form-control-sm\"><option value=\"5\">5</option><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option></select></label></div><div class=\"dataTables_paginate paging_simple_numbers\" id=\"kt_datatable_paginate\"><ul class=\"pagination\"><li class=\"paginate_button page-item previous disabled\" id=\"kt_datatable_previous\"><a href=\"#\" aria-controls=\"kt_datatable\" data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\"><i class=\"ki ki-arrow-back\"></i></a></li><li class=\"paginate_button page-item active\"><a href=\"#\" aria-controls=\"kt_datatable\" data-dt-idx=\"1\" tabindex=\"0\" class=\"page-link\">1</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"kt_datatable\" data-dt-idx=\"2\" tabindex=\"0\" class=\"page-link\">2</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"kt_datatable\" data-dt-idx=\"3\" tabindex=\"0\" class=\"page-link\">3</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"kt_datatable\" data-dt-idx=\"4\" tabindex=\"0\" class=\"page-link\">4</a></li><li class=\"paginate_button page-item \"><a href=\"#\" aria-controls=\"kt_datatable\" data-dt-idx=\"5\" tabindex=\"0\" class=\"page-link\">5</a></li><li class=\"paginate_button page-item next\" id=\"kt_datatable_next\"><a href=\"#\" aria-controls=\"kt_datatable\" data-dt-idx=\"6\" tabindex=\"0\" class=\"page-link\"><i class=\"ki ki-arrow-next\"></i></a></li></ul></div></div></div></div>\n                                                        <!--end: Datatable-->\n                                                    </div>\n\n\n\n\n\n\n                        </div>    \n                        </form>\n\n                                            \n                    </kt-portlet-body>\n                </kt-portlet>\n            </div>\n\n        </div>\n    </div>\n\n</div> \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/inventory-setting.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/inventory-setting/inventory-setting.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>inventory-setting works!</p>\n"

/***/ }),

/***/ "./src/app/views/pages/inventory-setting/create-loc/create-loc.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/create-loc/create-loc.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS1zZXR0aW5nL2NyZWF0ZS1sb2MvY3JlYXRlLWxvYy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory-setting/create-loc/create-loc.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/create-loc/create-loc.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateLocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocComponent", function() { return CreateLocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateLocComponent = /** @class */ (function () {
    function CreateLocComponent(activatedRoute, router, emplFB) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.emplFB = emplFB;
        this.hasFormErrors = false;
    }
    CreateLocComponent.prototype.ngOnInit = function () {
        this.initemplForm();
    };
    CreateLocComponent.prototype.initemplForm = function () {
        this.emplForm = this.emplFB.group({
            site: [this.site, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empl: [this.empl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [this.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            projet: [this.projet, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: [this.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateLocComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    CreateLocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-create-loc',
            template: __webpack_require__(/*! raw-loader!./create-loc.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/create-loc/create-loc.component.html"),
            styles: [__webpack_require__(/*! ./create-loc.component.scss */ "./src/app/views/pages/inventory-setting/create-loc/create-loc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateLocComponent);
    return CreateLocComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory-setting/create-site/create-site.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/create-site/create-site.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS1zZXR0aW5nL2NyZWF0ZS1zaXRlL2NyZWF0ZS1zaXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/inventory-setting/create-site/create-site.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/create-site/create-site.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreateSiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSiteComponent", function() { return CreateSiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateSiteComponent = /** @class */ (function () {
    function CreateSiteComponent(activatedRoute, router, siteFB) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.siteFB = siteFB;
        this.hasFormErrors = false;
    }
    CreateSiteComponent.prototype.ngOnInit = function () {
        this.initsiteForm();
    };
    CreateSiteComponent.prototype.initsiteForm = function () {
        this.siteForm = this.siteFB.group({
            code: [this.code, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.description, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            entite: [this.entite, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            declar: [this.declar, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [this.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cetrans: [this.cetrans, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateSiteComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    CreateSiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-create-site',
            template: __webpack_require__(/*! raw-loader!./create-site.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/create-site/create-site.component.html"),
            styles: [__webpack_require__(/*! ./create-site.component.scss */ "./src/app/views/pages/inventory-setting/create-site/create-site.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateSiteComponent);
    return CreateSiteComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS1zZXR0aW5nL2NyZWF0ZS1zdGF0dXMtc3RvY2svY3JlYXRlLXN0YXR1cy1zdG9jay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreateStatusStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStatusStockComponent", function() { return CreateStatusStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateStatusStockComponent = /** @class */ (function () {
    function CreateStatusStockComponent(activatedRoute, router, statusFB) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.statusFB = statusFB;
        this.hasFormErrors = false;
    }
    CreateStatusStockComponent.prototype.ngOnInit = function () {
        this.initstatusForm();
    };
    CreateStatusStockComponent.prototype.initstatusForm = function () {
        this.statusForm = this.statusFB.group({
            status: [this.status, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CreateStatusStockComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    CreateStatusStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-create-status-stock',
            template: __webpack_require__(/*! raw-loader!./create-status-stock.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.html"),
            styles: [__webpack_require__(/*! ./create-status-stock.component.scss */ "./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateStatusStockComponent);
    return CreateStatusStockComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory-setting/inventory-setting.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/inventory-setting.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2ludmVudG9yeS1zZXR0aW5nL2ludmVudG9yeS1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/inventory-setting/inventory-setting.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/inventory-setting.component.ts ***!
  \******************************************************************************/
/*! exports provided: InventorySettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySettingComponent", function() { return InventorySettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InventorySettingComponent = /** @class */ (function () {
    function InventorySettingComponent() {
    }
    InventorySettingComponent.prototype.ngOnInit = function () {
    };
    InventorySettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-inventory-setting',
            template: __webpack_require__(/*! raw-loader!./inventory-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/inventory-setting/inventory-setting.component.html"),
            styles: [__webpack_require__(/*! ./inventory-setting.component.scss */ "./src/app/views/pages/inventory-setting/inventory-setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InventorySettingComponent);
    return InventorySettingComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/inventory-setting/inventory-setting.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/inventory-setting/inventory-setting.module.ts ***!
  \***************************************************************************/
/*! exports provided: InventorySettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySettingModule", function() { return InventorySettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inventory_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-setting.component */ "./src/app/views/pages/inventory-setting/inventory-setting.component.ts");
/* harmony import */ var _create_site_create_site_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-site/create-site.component */ "./src/app/views/pages/inventory-setting/create-site/create-site.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
/* harmony import */ var _create_loc_create_loc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-loc/create-loc.component */ "./src/app/views/pages/inventory-setting/create-loc/create-loc.component.ts");
/* harmony import */ var _create_status_stock_create_status_stock_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-status-stock/create-status-stock.component */ "./src/app/views/pages/inventory-setting/create-status-stock/create-status-stock.component.ts");
// Angular













var routes = [
    {
        path: 'create-site',
        component: _create_site_create_site_component__WEBPACK_IMPORTED_MODULE_5__["CreateSiteComponent"]
    },
    {
        path: 'create-loc',
        component: _create_loc_create_loc_component__WEBPACK_IMPORTED_MODULE_11__["CreateLocComponent"]
    },
    {
        path: 'create-status-stock',
        component: _create_status_stock_create_status_stock_component__WEBPACK_IMPORTED_MODULE_12__["CreateStatusStockComponent"]
    },
];
var InventorySettingModule = /** @class */ (function () {
    function InventorySettingModule() {
    }
    InventorySettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__["PartialsModule"],
                _partials_content_general_material_preview_material_preview_module__WEBPACK_IMPORTED_MODULE_10__["MaterialPreviewModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_inventory_setting_component__WEBPACK_IMPORTED_MODULE_4__["InventorySettingComponent"], _create_site_create_site_component__WEBPACK_IMPORTED_MODULE_5__["CreateSiteComponent"], _create_loc_create_loc_component__WEBPACK_IMPORTED_MODULE_11__["CreateLocComponent"], _create_status_stock_create_status_stock_component__WEBPACK_IMPORTED_MODULE_12__["CreateStatusStockComponent"]]
        })
    ], InventorySettingModule);
    return InventorySettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-inventory-setting-inventory-setting-module.js.map