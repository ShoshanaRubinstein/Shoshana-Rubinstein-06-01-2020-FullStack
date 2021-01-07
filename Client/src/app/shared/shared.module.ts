import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { SharedServicesModule } from "./services";


const EXPORTED_MODULES = [
	SharedServicesModule,
	
];

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
	],
	exports: [
		...EXPORTED_MODULES
	],
})
export class SharedModule { }