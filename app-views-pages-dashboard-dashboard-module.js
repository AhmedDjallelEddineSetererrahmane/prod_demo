(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/daiyly/daiyly.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/daiyly/daiyly.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row row-no-padding row-col-separator-xl\">\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data1\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data2\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data3\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data4\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data5\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data6\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data7\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data8\"></kt-widget1>\n            </div>\n        </div>\n    </kt-portlet-body>\n</kt-portlet>\n\n<kt-portlet>\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row row-no-padding row-col-separator-xl\">\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data9\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data10\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data11\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data12\"></kt-widget1>\n            </div>\n        </div>\n    </kt-portlet-body>\n</kt-portlet>\n\n\n<kt-portlet>\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row row-no-padding row-col-separator-xl\">\n            <div class=\"col-xl-6\">\n                <kt-widget1 [data]=\"data13\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-6\">\n                <kt-widget1 [data]=\"data14\"></kt-widget1>\n            </div>\n        </div>\n    </kt-portlet-body>\n</kt-portlet>\n\n<kt-portlet>\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row row-no-padding row-col-separator-xl\">\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data15\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data16\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data17\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data18\"></kt-widget1>\n            </div>\n\t\t</div>\n\t\t<div class=\"row row-no-padding row-col-separator-xl\">\n            <div class=\"col-xl-6\">\n                <kt-widget1 [data]=\"data19\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-6\">\n                <kt-widget1 [data]=\"data20\"></kt-widget1>\n            </div>\n        </div>\n    </kt-portlet-body>\n</kt-portlet>\n\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Statistique du paiement'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <kt-widget12 [labels]=\"dashbordReportsData.payments_amount_monthly.days\" [dataset]=\"dashbordReportsData.payments_amount_monthly.values\" [total]=\"dashbordReportsData.payment_amount_month\"></kt-widget12>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Statistique CA'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <kt-widget12 [labels]=\"dashbordReportsData.encasement_amount_monthly.days\" [dataset]=\"dashbordReportsData.encasement_amount_monthly.values\" [total]=\"dashbordReportsData.encasement_amount_month\"></kt-widget12>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Bonus Par Employee'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <table class=\"table table-bordered table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Employee</th>\n                            <th>Bonus</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of dashbordReportsData.get_users_bonus;let i = index\">\n                            <td>{{item.user}}</td>\n                            <td>{{item.bonus}}</td>\n\n                        </tr>\n\n                    </tbody>\n                </table>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Bonus Par Employee'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <div id=\"chartdiv\" style=\"width: 100%; height: 350px\"></div>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Vente Par Produit'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <table class=\"table table-bordered table-hover\">\n                    <thead>\n                        <tr>\n                            <th>code produit</th>\n\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t<th>prix</th>\n\t\t\t\t\t\t\t<th>Quantité</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of dashbordReportsData.incomes_product;let i = index\">\n                            <td>{{item.product_code}}</td>\n                            <td>{{item.product_description}}</td>\n                            <td>{{item.income}}</td>\n                            <td>{{item.qty}}</td>\n\n                        </tr>\n\n                    </tbody>\n                </table>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Vente par produit'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <div id=\"chartdiv1\" style=\"width: 100%; height: 350px\"></div>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Vente par produit (Quantité)'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <div id=\"chartdiv2\" style=\"width: 100%; height: 350px\"></div>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n\n\n<!-- <kt-portlet>\n\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t<div class=\"row row-no-padding row-col-separator-xl\">\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget1></kt-widget1>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Daily Sales'\" [desc]=\"'Check out each collumn for more details'\"></kt-widget14>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Revenue Change'\" [desc]=\"'Revenue change breakdown by cities'\"></kt-widget14>\n\t\t\t</div>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Download Files'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_1\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<div class=\"kt-widget4__tools\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\n\t\t\t\t\t\t\t\t<i class=\"flaticon2-download-symbol-of-down-arrow-in-a-rectangle\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'New Users'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_2\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm\" [ngClass]=\"item.buttonClass\">Follow</a>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Latest Updates'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_3\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Exclusive Datatable'\" [class]=\"'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu></kt-context-menu>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t\t\t<kt-data-table></kt-data-table>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Authors Profit'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_4\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Best Sellers'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget5></kt-widget5>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Recent Activities'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-timeline2></kt-timeline2>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div> -->\n\n\n<!--\n<kt-portlet>\n\t<kt-portlet-header>\n\t\t<ng-container ktPortletTitle>\n\t\t</ng-container>\n\t\t<ng-container ktPortletTools>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<kt-portlet-body></kt-portlet-body>\n\t<kt-portlet-footer></kt-portlet-footer>\n</kt-portlet>\n-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/yearly/yearly.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/yearly/yearly.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row row-no-padding row-col-separator-xl\">\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data1\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data2\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data3\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data4\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data5\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data6\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data7\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-3\">\n                <kt-widget1 [data]=\"data8\"></kt-widget1>\n            </div>\n        </div>\n    </kt-portlet-body>\n</kt-portlet>\n\n\n<kt-portlet>\n    <kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n        <div class=\"row row-no-padding row-col-separator-xl\">\n            <div class=\"col-xl-6\">\n                <kt-widget1 [data]=\"data13\"></kt-widget1>\n            </div>\n            <div class=\"col-xl-6\">\n                <kt-widget1 [data]=\"data14\"></kt-widget1>\n            </div>\n        </div>\n    </kt-portlet-body>\n</kt-portlet>\n\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Statistique du paiement'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <kt-widget12 [labels]=\"dashbordReportsData.payments_amount_yearly.days\" [dataset]=\"dashbordReportsData.payments_amount_yearly.values\" [total]=\"dashbordReportsData.payment_amount_year\"></kt-widget12>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Statistique CA'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <kt-widget12 [labels]=\"dashbordReportsData.encasement_amount_yearly.days\" [dataset]=\"dashbordReportsData.encasement_amount_yearly.values\" [total]=\"dashbordReportsData.encasement_amount_year\"></kt-widget12>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Bonus Par Employee'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <table class=\"table table-bordered table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Employee</th>\n                            <th>Bonus</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of dashbordReportsData.get_users_bonus;let i = index\">\n                            <td>{{item.user}}</td>\n                            <td>{{item.bonus}}</td>\n\n                        </tr>\n\n                    </tbody>\n                </table>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Bonus Par Employee'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <div id=\"chartdiv\" style=\"width: 100%; height: 350px\"></div>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Vente Par Produit'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <table class=\"table table-bordered table-hover\">\n                    <thead>\n                        <tr>\n                            <th>code produit</th>\n\t\t\t\t\t\t\t<th>Description</th>\n\t\t\t\t\t\t\t<th>prix</th>\n\t\t\t\t\t\t\t<th>Quantité</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of dashbordReportsData.incomes_product;let i = index\">\n                            <td>{{item.product_code}}</td>\n                            <td>{{item.product_description}}</td>\n\t\t\t\t\t\t\t<td>{{item.income}}</td>\n\t\t\t\t\t\t\t<td>{{item.qty}}</td>\n\n                        </tr>\n\n                    </tbody>\n                </table>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Vente par produit'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <div id=\"chartdiv1\" style=\"width: 100%; height: 350px\"></div>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-6\">\n        <kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n            <kt-portlet-header [title]=\"'Vente par produit (Quantité)'\">\n            </kt-portlet-header>\n            <kt-portlet-body>\n                <div id=\"chartdiv2\" style=\"width: 100%; height: 350px\"></div>\n            </kt-portlet-body>\n        </kt-portlet>\n    </div>\n</div>\n\n<!-- <kt-portlet>\n\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t<div class=\"row row-no-padding row-col-separator-xl\">\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget1></kt-widget1>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Daily Sales'\" [desc]=\"'Check out each collumn for more details'\"></kt-widget14>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Revenue Change'\" [desc]=\"'Revenue change breakdown by cities'\"></kt-widget14>\n\t\t\t</div>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Download Files'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_1\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<div class=\"kt-widget4__tools\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\n\t\t\t\t\t\t\t\t<i class=\"flaticon2-download-symbol-of-down-arrow-in-a-rectangle\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'New Users'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_2\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm\" [ngClass]=\"item.buttonClass\">Follow</a>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Latest Updates'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_3\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Exclusive Datatable'\" [class]=\"'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu></kt-context-menu>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t\t\t<kt-data-table></kt-data-table>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Authors Profit'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_4\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Best Sellers'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget5></kt-widget5>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Recent Activities'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-timeline2></kt-timeline2>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div> -->\n\n\n<!--\n<kt-portlet>\n\t<kt-portlet-header>\n\t\t<ng-container ktPortletTitle>\n\t\t</ng-container>\n\t\t<ng-container ktPortletTools>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<kt-portlet-body></kt-portlet-body>\n\t<kt-portlet-footer></kt-portlet-footer>\n</kt-portlet>\n-->"

/***/ }),

/***/ "./src/app/views/pages/dashboard/daiyly/daiyly.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/dashboard/daiyly/daiyly.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYWl5bHkvZGFpeWx5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/daiyly/daiyly.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/dashboard/daiyly/daiyly.component.ts ***!
  \******************************************************************/
/*! exports provided: DaiylyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaiylyComponent", function() { return DaiylyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");

// Angular

// Lodash

// Services
// Widgets model




var DaiylyComponent = /** @class */ (function () {
    function DaiylyComponent(zone, layoutConfigService, reportsService) {
        this.zone = zone;
        this.layoutConfigService = layoutConfigService;
        this.reportsService = reportsService;
    }
    DaiylyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportsService.getDashboardReports().subscribe(function (res) { return _this.dashbordReportsData = res; }, function (err) { return console.log(err); }, function () {
            _this.product_sorted_data = _this.dashbordReportsData.incomes_product.sort(function (a, b) { return b.income - a.income; });
            _this.initChart();
            _this.initChart1();
            _this.initChart2();
            _this.data1 = [
                {
                    title: 'Patient',
                    desc: 'Nombre de patient Ajourdhui',
                    value: _this.dashbordReportsData.today_patient_number,
                    valueClass: 'kt-font-brand'
                },
                {
                    title: 'Patient',
                    desc: 'Nombre de patient Mois',
                    value: _this.dashbordReportsData.month_patient_number,
                    valueClass: 'kt-font-danger'
                }
            ];
            _this.data2 = [
                {
                    title: 'Audiometries',
                    desc: 'Nombre audiometries Aujourdhui',
                    value: _this.dashbordReportsData.today_audiometries_number,
                    valueClass: 'kt-font-success'
                }, {
                    title: 'Audiometries',
                    desc: 'Nombre audiometries mois',
                    value: _this.dashbordReportsData.month_audiometries_number,
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data3 = [
                {
                    title: 'Devis',
                    desc: 'Nombre de devis Ajourdhui',
                    value: _this.dashbordReportsData.today_quotations_number,
                    valueClass: 'kt-font-brand'
                }, {
                    title: 'Devis',
                    desc: 'Nombre de devis Mois',
                    value: _this.dashbordReportsData.month_quotations_number,
                    valueClass: 'kt-font-danger'
                }
            ];
            _this.data4 = [
                {
                    title: 'Facture',
                    desc: 'Nombre facture Aujourdhui',
                    value: _this.dashbordReportsData.today_invoices_number,
                    valueClass: 'kt-font-success'
                }, {
                    title: 'Facture',
                    desc: 'Nombre facture mois',
                    value: _this.dashbordReportsData.month_invoices_number,
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data5 = [
                {
                    title: 'Réception',
                    desc: 'Nombre de reception Aujourdhui',
                    value: _this.dashbordReportsData.get_reception_number_today,
                    valueClass: 'kt-font-dark'
                }, {
                    title: 'Réception',
                    desc: 'Nombre de reception mois',
                    value: _this.dashbordReportsData.get_reception_number_month,
                    valueClass: 'kt-font-dark'
                }
            ];
            _this.data6 = [
                {
                    title: 'Réception',
                    desc: 'Montant de reception Aujourdhui',
                    value: _this.dashbordReportsData.get_reception_amount_today.toFixed(2),
                    valueClass: 'kt-font-dark'
                }, {
                    title: 'Réception',
                    desc: 'Montant de reception mois',
                    value: _this.dashbordReportsData.get_reception_amount_month.toFixed(2),
                    valueClass: 'kt-font-dark'
                }
            ];
            _this.data7 = [
                {
                    title: 'Remise',
                    desc: 'Nombre Remise Aujourdhui',
                    value: _this.dashbordReportsData.get_discount_number_today,
                    valueClass: 'kt-font-warning'
                }, {
                    title: 'Remise',
                    desc: 'Nombre Remise mois',
                    value: _this.dashbordReportsData.get_discount_number_month,
                    valueClass: 'kt-font-warning'
                }
            ];
            _this.data8 = [
                {
                    title: 'Remise',
                    desc: 'Montant Remise Aujourdhui',
                    value: _this.dashbordReportsData.get_discounts_amount_today.toFixed(2),
                    valueClass: 'kt-font-warning'
                }, {
                    title: 'Remise',
                    desc: 'Montant Remise mois',
                    value: _this.dashbordReportsData.get_discounts_amount_month.toFixed(2),
                    valueClass: 'kt-font-warning'
                }
            ];
            _this.data9 = [
                {
                    title: 'Paiement',
                    desc: 'Montant de paiement aujourdhui',
                    value: _this.dashbordReportsData.payment_amount_today.toFixed(2),
                    valueClass: 'kt-font-success'
                }, {
                    title: 'Paiement',
                    desc: 'Montant de paiement mois',
                    value: _this.dashbordReportsData.payment_amount_month.toFixed(2),
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data10 = [
                {
                    title: 'Chiffre affaire',
                    desc: 'Chiffre affaire aujourdhui',
                    value: _this.dashbordReportsData.encasement_amount_today.toFixed(2),
                    valueClass: 'kt-font-danger'
                }, {
                    title: 'Chiffre affaire',
                    desc: 'Chiffre affaire mois',
                    value: _this.dashbordReportsData.encasement_amount_month.toFixed(2),
                    valueClass: 'kt-font-danger'
                }
            ];
            _this.data11 = [
                {
                    title: 'creance fournisseur',
                    desc: 'Montant de creance fournisseur aujourdhui',
                    value: _this.dashbordReportsData.get_provider_debts_today.toFixed(2),
                    valueClass: 'kt-font-dark'
                }, {
                    title: 'creance fournisseur',
                    desc: 'Montant de creance fournisseur mois',
                    value: _this.dashbordReportsData.get_provider_debts_month.toFixed(2),
                    valueClass: 'kt-font-dark'
                }
            ];
            _this.data12 = [
                {
                    title: 'paiement fournisseur',
                    desc: 'Montant paiement fournisseur aujourdhui',
                    value: _this.dashbordReportsData.get_providers_payments_today.toFixed(2),
                    valueClass: 'kt-font-info'
                }, {
                    title: 'paiemnt fournisseur',
                    desc: 'Montant paiement fournisseur mois',
                    value: _this.dashbordReportsData.get_providers_payments_month.toFixed(2),
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data13 = [
                {
                    title: 'VENTE JOURNIALEIRE',
                    desc: 'Nombre de ventes ajourdhui',
                    value: _this.dashbordReportsData.get_daily_sales_number_today,
                    valueClass: 'kt-font-info'
                }, {
                    title: 'VENTE JOURNIALEIRE',
                    desc: 'Nombre de ventes mois',
                    value: _this.dashbordReportsData.get_daily_sales_number_month,
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data14 = [
                {
                    title: 'VENTE JOURNIALEIRE',
                    desc: 'Montnat de ventes ajourdhui',
                    value: _this.dashbordReportsData.get_daily_sales_amount_today.toFixed(2),
                    valueClass: 'kt-font-info'
                }, {
                    title: 'VENTE JOURNIALEIRE',
                    desc: 'Montant de ventes Mois',
                    value: _this.dashbordReportsData.get_daily_sales_amount_month.toFixed(2),
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data15 = [
                {
                    title: 'SAV',
                    desc: 'Nombre SAV ajourdhui',
                    value: _this.dashbordReportsData.get_sav_number_today,
                    valueClass: 'kt-font-info'
                }, {
                    title: 'SAV',
                    desc: 'Nombre SAV Mois',
                    value: _this.dashbordReportsData.get_sav_number_month,
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data16 = [
                {
                    title: 'SAV',
                    desc: 'Nombre de SAV en cabinet',
                    value: _this.dashbordReportsData.get_sav_1_number_today,
                    valueClass: 'kt-font-info'
                }, {
                    title: 'SAV',
                    desc: 'Nombre de SAV en transfer',
                    value: _this.dashbordReportsData.get_sav_2_number_today,
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data17 = [
                {
                    title: 'SAV',
                    desc: 'Nombre de SAV receptionés',
                    value: _this.dashbordReportsData.get_sav_3_number_today,
                    valueClass: 'kt-font-info'
                }, {
                    title: 'SAV',
                    desc: 'Montant de SAV vendi au client',
                    value: _this.dashbordReportsData.get_sav_4_number_today,
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data18 = [
                {
                    title: 'SAV',
                    desc: 'Montnat de payment SAV ajourdhui',
                    value: _this.dashbordReportsData.get_sav_payments_today.toFixed(2),
                    valueClass: 'kt-font-info'
                }, {
                    title: 'SAV',
                    desc: 'Montant de payment SAV mois',
                    value: _this.dashbordReportsData.get_sav_payments_month.toFixed(2),
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data19 = [
                {
                    title: 'SAV',
                    desc: 'Montnat de creance fournisseur SAV ajourdhui',
                    value: _this.dashbordReportsData.get_sav_providers_payments_today.toFixed(2),
                    valueClass: 'kt-font-info'
                }, {
                    title: 'SAV',
                    desc: 'Montant de creance fournisseur SAV mois',
                    value: _this.dashbordReportsData.get_sav_providers_payments_month.toFixed(2),
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data20 = [
                {
                    title: 'SAV',
                    desc: 'Montnat de paiement fournisseur SAV  ajourdhui',
                    value: _this.dashbordReportsData.get_sav_provider_debts_today.toFixed(2),
                    valueClass: 'kt-font-info'
                }, {
                    title: 'SAV',
                    desc: 'Montant de paiement fournisseur SAV  mois',
                    value: _this.dashbordReportsData.get_sav_provider_debts_month.toFixed(2),
                    valueClass: 'kt-font-infos'
                }
            ];
        });
        // @ts-ignore
        this.widget4_1 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/files/doc.svg',
                title: 'Metronic Documentation',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/jpg.svg',
                title: 'Project Launch Evgent',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Full Developer Manual For 4.7',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/javascript.svg',
                title: 'Make JS Great Again',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/zip.svg',
                title: 'Download Ziped version OF 5.0',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Finance Report 2016/2017',
                url: 'https://keenthemes.com.my/metronic',
            },
        ]);
        // @ts-ignore
        this.widget4_2 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/users/100_4.jpg',
                username: 'Anna Strong',
                desc: 'Visual Designer,Google Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-brand'
            }, {
                pic: './assets/media/users/100_14.jpg',
                username: 'Milano Esco',
                desc: 'Product Designer, Apple Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-warning'
            }, {
                pic: './assets/media/users/100_11.jpg',
                username: 'Nick Bold',
                desc: 'Web Developer, Facebook Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-danger'
            }, {
                pic: './assets/media/users/100_1.jpg',
                username: 'Wilter Delton',
                desc: 'Project Manager, Amazon Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-success'
            }, {
                pic: './assets/media/users/100_5.jpg',
                username: 'Nick Stone',
                desc: 'Visual Designer, Github Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-dark'
            },
        ]);
        // @ts-ignore
        this.widget4_3 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                icon: 'flaticon-pie-chart-1 kt-font-info',
                title: 'Metronic v6 has been arrived!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$500',
                valueColor: 'kt-font-info'
            }, {
                icon: 'flaticon-safe-shield-protection kt-font-success',
                title: 'Metronic community meet-up 2019 in Rome.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1260',
                valueColor: 'kt-font-success'
            }, {
                icon: 'flaticon2-line-chart kt-font-danger',
                title: 'Metronic Angular 8 version will be landing soon..',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1080',
                valueColor: 'kt-font-danger'
            }, {
                icon: 'flaticon2-pie-chart-1 kt-font-primary',
                title: 'ale! Purchase Metronic at 70% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-primary'
            }, {
                icon: 'flaticon2-rocket kt-font-brand',
                title: 'Metronic VueJS version is in progress. Stay tuned!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+134',
                valueColor: 'kt-font-brand'
            }, {
                icon: 'flaticon2-notification kt-font-warning',
                title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-warning'
            }, {
                icon: 'flaticon2-file kt-font-focus',
                title: 'Metronic React version is in progress.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+13%',
                valueColor: 'kt-font-focus'
            },
        ]);
        // @ts-ignore
        this.widget4_4 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/client-logos/logo5.png',
                title: 'Trump Themes',
                desc: 'Make Metronic Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$2500',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo4.png',
                title: 'StarBucks',
                desc: 'Good Coffee & Snacks',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$290',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo3.png',
                title: 'Phyton',
                desc: 'A Programming Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$17',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo2.png',
                title: 'GreenMakers',
                desc: 'Make Green Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$2.50',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo1.png',
                title: 'FlyThemes',
                desc: 'A Let\'s Fly Fast Again Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+200',
                valueColor: 'kt-font-brand'
            },
        ]);
    };
    DaiylyComponent.prototype.initChart = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);
            // Add data
            chart.data = _this.dashbordReportsData.get_users_bonus;
            // Create axes
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
            categoryAxis.dataFields.category = "user";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            // categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            // 	if (target.dataItem && target.dataItem.index & 2 == 2) {
            // 		return dy + 25;
            // 	}
            // 	return dy;
            // });
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
            // Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
            series.dataFields.valueY = "bonus";
            series.dataFields.categoryX = "user";
            series.name = "Bonus";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            _this.chart = chart;
        });
    };
    DaiylyComponent.prototype.initChart1 = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]("chartdiv1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);
            // Add data
            chart.data = _this.dashbordReportsData.incomes_product;
            // Create axes
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
            categoryAxis.dataFields.category = "product_description";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.renderer.labels.template.rotation = 320;
            // categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            // 	if (target.dataItem && target.dataItem.index & 2 == 2) {
            // 		return dy + 25;
            // 	}
            // 	return dy;
            // });
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
            // Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
            series.dataFields.valueY = "income";
            series.dataFields.categoryX = "product_description";
            series.name = "Vente";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;
            series.columns.template.adapter.add("fill", function (fill, target) {
                return chart.colors.getIndex(target.dataItem.index);
            });
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            _this.chart = chart;
        });
    };
    DaiylyComponent.prototype.initChart2 = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]("chartdiv2", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["PieChart3D"]);
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
            chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["Legend"]();
            chart.data = _this.product_sorted_data;
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["PieSeries3D"]());
            series.dataFields.value = "qty";
            series.dataFields.category = "product_description";
            series.labels.template.text = "{category}: {value.value}";
            series.slices.template.tooltipText = "{category}: {value.value}";
            chart.legend.valueLabels.template.text = "{value.value}";
        });
    };
    DaiylyComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_4__["ReportsService"] }
    ]; };
    DaiylyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./daiyly.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/daiyly/daiyly.component.html"),
            styles: [__webpack_require__(/*! ./daiyly.component.scss */ "./src/app/views/pages/dashboard/daiyly/daiyly.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _core_application__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]])
    ], DaiylyComponent);
    return DaiylyComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvZnJlZWxhbmNlL2Zyb250L3NyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNDLGFBQUE7QUNESCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgbmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./yearly/yearly.component */ "./src/app/views/pages/dashboard/yearly/yearly.component.ts");
/* harmony import */ var _daiyly_daiyly_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./daiyly/daiyly.component */ "./src/app/views/pages/dashboard/daiyly/daiyly.component.ts");

// Angular



// Core Module






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _daiyly_daiyly_component__WEBPACK_IMPORTED_MODULE_9__["DaiylyComponent"]
                    },
                    {
                        path: 'yearly',
                        component: _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_8__["YearlyComponent"]
                    },
                ]),
            ],
            providers: [_core_application__WEBPACK_IMPORTED_MODULE_7__["ReportsService"]],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _yearly_yearly_component__WEBPACK_IMPORTED_MODULE_8__["YearlyComponent"],
                _daiyly_daiyly_component__WEBPACK_IMPORTED_MODULE_9__["DaiylyComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/yearly/yearly.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/dashboard/yearly/yearly.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC95ZWFybHkveWVhcmx5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/yearly/yearly.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/dashboard/yearly/yearly.component.ts ***!
  \******************************************************************/
/*! exports provided: YearlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearlyComponent", function() { return YearlyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_application__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/application */ "./src/app/core/application/index.ts");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");



// Widgets model




var YearlyComponent = /** @class */ (function () {
    function YearlyComponent(zone, layoutConfigService, reportsService) {
        this.zone = zone;
        this.layoutConfigService = layoutConfigService;
        this.reportsService = reportsService;
    }
    YearlyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportsService.getDashboardReportsYearly().subscribe(function (res) { return _this.dashbordReportsData = res; }, function (err) { return console.log(err); }, function () {
            _this.product_sorted_data = _this.dashbordReportsData.incomes_product.sort(function (a, b) { return b.income - a.income; });
            _this.initChart();
            _this.initChart1();
            _this.initChart2();
            _this.data1 = [
                {
                    title: 'Patient',
                    desc: 'Nombre de patient Année',
                    value: _this.dashbordReportsData.year_patient_number,
                    valueClass: 'kt-font-danger'
                },
                {
                    title: 'Audiometries',
                    desc: 'Nombre audiometries Année',
                    value: _this.dashbordReportsData.year_audiometries_number,
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data2 = [
                {
                    title: 'Devis',
                    desc: 'Nombre de devis Année',
                    value: _this.dashbordReportsData.year_quotations_number,
                    valueClass: 'kt-font-danger'
                },
                {
                    title: 'Facture',
                    desc: 'Nombre facture Année',
                    value: _this.dashbordReportsData.year_invoices_number,
                    valueClass: 'kt-font-success'
                }
            ];
            _this.data3 = [
                {
                    title: 'Réception',
                    desc: 'Nombre de reception Année',
                    value: _this.dashbordReportsData.get_reception_number_year,
                    valueClass: 'kt-font-dark'
                },
                {
                    title: 'Réception',
                    desc: 'Montant de reception Année',
                    value: _this.dashbordReportsData.get_reception_amount_year.toFixed(2),
                    valueClass: 'kt-font-dark'
                }
            ];
            _this.data4 = [];
            _this.data5 = [
                {
                    title: 'Remise',
                    desc: 'Nombre Remise Année',
                    value: _this.dashbordReportsData.get_discount_number_year,
                    valueClass: 'kt-font-warning'
                },
                {
                    title: 'Remise',
                    desc: 'Montant Remise Année',
                    value: _this.dashbordReportsData.get_discounts_amount_year.toFixed(2),
                    valueClass: 'kt-font-warning'
                }
            ];
            _this.data6 = [
                {
                    title: 'Paiement',
                    desc: 'Montant de paiement Année',
                    value: _this.dashbordReportsData.payment_amount_year.toFixed(2),
                    valueClass: 'kt-font-success'
                },
                {
                    title: 'Chiffre affaire',
                    desc: 'Chiffre affaire Année',
                    value: _this.dashbordReportsData.encasement_amount_year.toFixed(2),
                    valueClass: 'kt-font-danger'
                }
            ];
            _this.data7 = [
                {
                    title: 'creance fournisseur',
                    desc: 'Montant de creance fournisseur Année',
                    value: _this.dashbordReportsData.get_provider_debts_year.toFixed(2),
                    valueClass: 'kt-font-dark'
                },
                {
                    title: 'paiemnt fournisseur',
                    desc: 'Montant paiement fournisseur Année',
                    value: _this.dashbordReportsData.get_providers_payments_year.toFixed(2),
                    valueClass: 'kt-font-infos'
                }
            ];
            _this.data8 = [
                {
                    title: 'VENTE JOURNIALEIRE',
                    desc: 'Nombre de ventes Année',
                    value: _this.dashbordReportsData.get_daily_sales_number_year,
                    valueClass: 'kt-font-infos'
                },
                {
                    title: 'VENTE JOURNIALEIRE',
                    desc: 'Montant de ventes Année',
                    value: _this.dashbordReportsData.get_daily_sales_amount_year.toFixed(2),
                    valueClass: 'kt-font-infos'
                }
            ];
        });
        // @ts-ignore
        this.widget4_1 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/files/doc.svg',
                title: 'Metronic Documentation',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/jpg.svg',
                title: 'Project Launch Evgent',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Full Developer Manual For 4.7',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/javascript.svg',
                title: 'Make JS Great Again',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/zip.svg',
                title: 'Download Ziped version OF 5.0',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Finance Report 2016/2017',
                url: 'https://keenthemes.com.my/metronic',
            },
        ]);
        // @ts-ignore
        this.widget4_2 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/users/100_4.jpg',
                username: 'Anna Strong',
                desc: 'Visual Designer,Google Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-brand'
            }, {
                pic: './assets/media/users/100_14.jpg',
                username: 'Milano Esco',
                desc: 'Product Designer, Apple Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-warning'
            }, {
                pic: './assets/media/users/100_11.jpg',
                username: 'Nick Bold',
                desc: 'Web Developer, Facebook Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-danger'
            }, {
                pic: './assets/media/users/100_1.jpg',
                username: 'Wilter Delton',
                desc: 'Project Manager, Amazon Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-success'
            }, {
                pic: './assets/media/users/100_5.jpg',
                username: 'Nick Stone',
                desc: 'Visual Designer, Github Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-dark'
            },
        ]);
        // @ts-ignore
        this.widget4_3 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                icon: 'flaticon-pie-chart-1 kt-font-info',
                title: 'Metronic v6 has been arrived!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$500',
                valueColor: 'kt-font-info'
            }, {
                icon: 'flaticon-safe-shield-protection kt-font-success',
                title: 'Metronic community meet-up 2019 in Rome.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1260',
                valueColor: 'kt-font-success'
            }, {
                icon: 'flaticon2-line-chart kt-font-danger',
                title: 'Metronic Angular 8 version will be landing soon..',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1080',
                valueColor: 'kt-font-danger'
            }, {
                icon: 'flaticon2-pie-chart-1 kt-font-primary',
                title: 'ale! Purchase Metronic at 70% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-primary'
            }, {
                icon: 'flaticon2-rocket kt-font-brand',
                title: 'Metronic VueJS version is in progress. Stay tuned!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+134',
                valueColor: 'kt-font-brand'
            }, {
                icon: 'flaticon2-notification kt-font-warning',
                title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-warning'
            }, {
                icon: 'flaticon2-file kt-font-focus',
                title: 'Metronic React version is in progress.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+13%',
                valueColor: 'kt-font-focus'
            },
        ]);
        // @ts-ignore
        this.widget4_4 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/client-logos/logo5.png',
                title: 'Trump Themes',
                desc: 'Make Metronic Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$2500',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo4.png',
                title: 'StarBucks',
                desc: 'Good Coffee & Snacks',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$290',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo3.png',
                title: 'Phyton',
                desc: 'A Programming Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$17',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo2.png',
                title: 'GreenMakers',
                desc: 'Make Green Great Again',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$2.50',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo1.png',
                title: 'FlyThemes',
                desc: 'A Let\'s Fly Fast Again Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+200',
                valueColor: 'kt-font-brand'
            },
        ]);
    };
    YearlyComponent.prototype.initChart = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);
            // Add data
            chart.data = _this.dashbordReportsData.get_users_bonus;
            // Create axes
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
            categoryAxis.dataFields.category = "user";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            // categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            // 	if (target.dataItem && target.dataItem.index & 2 == 2) {
            // 		return dy + 25;
            // 	}
            // 	return dy;
            // });
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
            // Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
            series.dataFields.valueY = "bonus";
            series.dataFields.categoryX = "user";
            series.name = "Bonus";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            _this.chart = chart;
        });
    };
    YearlyComponent.prototype.initChart1 = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]("chartdiv1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["XYChart"]);
            // Add data
            chart.data = _this.dashbordReportsData.incomes_product;
            // Create axes
            var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["CategoryAxis"]());
            categoryAxis.dataFields.category = "product_description";
            categoryAxis.renderer.grid.template.location = 0;
            categoryAxis.renderer.minGridDistance = 30;
            categoryAxis.renderer.labels.template.rotation = 320;
            // categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            // 	if (target.dataItem && target.dataItem.index & 2 == 2) {
            // 		return dy + 25;
            // 	}
            // 	return dy;
            // });
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ValueAxis"]());
            // Create series
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["ColumnSeries"]());
            series.dataFields.valueY = "income";
            series.dataFields.categoryX = "product_description";
            series.name = "Vente";
            series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
            series.columns.template.fillOpacity = .8;
            series.columns.template.adapter.add("fill", function (fill, target) {
                return chart.colors.getIndex(target.dataItem.index);
            });
            var columnTemplate = series.columns.template;
            columnTemplate.strokeWidth = 2;
            columnTemplate.strokeOpacity = 1;
            _this.chart = chart;
        });
    };
    YearlyComponent.prototype.initChart2 = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            // Create chart instance
            var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_5__["create"]("chartdiv2", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["PieChart3D"]);
            chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
            chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["Legend"]();
            chart.data = _this.dashbordReportsData.incomes_product;
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_6__["PieSeries3D"]());
            series.dataFields.value = "qty";
            series.dataFields.category = "product_description";
            series.labels.template.text = "{category}: {value.value}";
            series.slices.template.tooltipText = "{category}: {value.value}";
            chart.legend.valueLabels.template.text = "{value.value}";
        });
    };
    YearlyComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _core_application__WEBPACK_IMPORTED_MODULE_4__["ReportsService"] }
    ]; };
    YearlyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-yearly',
            template: __webpack_require__(/*! raw-loader!./yearly.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/yearly/yearly.component.html"),
            styles: [__webpack_require__(/*! ./yearly.component.scss */ "./src/app/views/pages/dashboard/yearly/yearly.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _core_application__WEBPACK_IMPORTED_MODULE_4__["ReportsService"]])
    ], YearlyComponent);
    return YearlyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map