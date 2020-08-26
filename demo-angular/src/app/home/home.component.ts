import { Component, OnInit } from "@angular/core";
import { create, NgxDateRange } from "../../../../src";
import { Options } from "../../../../src/ngx-date-range.common";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    dateRange: NgxDateRange;

    constructor(private page: Page) {}

    ngOnInit(): void {
        const options = new Options();
        // options.selectionMode = "MULTIPLE";
        options.selectionMode = "SINGLE";
        // options.selectionMode = "RANGE";
        options.selectToday = false;
        // options.supportsRtl = true;
        // options.disablePrevDates = true;
        // options.language = {
        //     countryCode: 'ISR',
        //     languageCode: 'he'
        // };
        this.dateRange = create(options);
    }

    selectedDates(selectionMode) {
        const options = new Options();
        options.selectionMode = selectionMode;
        this.dateRange = create(options);

        // console.log(this.dateRange.getSelectedDates());
        this.dateRange.showDateRangePicker();
    }

    getSelectedDate() {
        const selectedDates = this.dateRange.getSelectedDates();
        console.log(selectedDates)
    }
}
