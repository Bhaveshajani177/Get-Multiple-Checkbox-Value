import { Component } from '@angular/core';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  checked = false;
  selectedItemsList: any;
  checkedIDs: any;

  // for snacbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  checkboxesDataList = [
    {
      id: 'C001',
      label: 'Photography',
      isChecked: false
    },
    {
      id: 'C002',
      label: 'Writing',
      isChecked: false
    },
    {
      id: 'C003',
      label: 'Painting',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Knitting',
      isChecked: false
    },
    {
      id: 'C004',
      label: 'Dancing',
      isChecked: false
    },
    {
      id: 'C005',
      label: 'Gardening',
      isChecked: false
    },
    {
      id: 'C006',
      label: 'Drawing',
      isChecked: false
    },
    {
      id: 'C007',
      label: 'Gyming',
      isChecked: false
    },
    {
      id: 'C008',
      label: 'Cooking',
      isChecked: false
    },
    {
      id: 'C009',
      label: 'Scrapbooking',
      isChecked: false
    },
    {
      id: 'C010',
      label: 'Origami',
      isChecked: false
    }
  ]

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchSelectedItems()
    this.fetchCheckedIDs()
  }

  changeSelection() {
    this.fetchSelectedItems();
    this.fetchCheckedIDs();
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked;
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }

  submitHobbies(){
    console.log(this.selectedItemsList);
    console.log(this.checkedIDs);
    // show snackbar
    this._snackBar.open('Successfully, Show result in console', '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3 * 1000,
      panelClass: ['snackbar-color']
    });
  }

}
