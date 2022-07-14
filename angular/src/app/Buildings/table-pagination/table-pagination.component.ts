import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort , Sort} from '@angular/material/sort';
import { Building } from 'src/app/models/Building';

@Component({
  selector: 'table-pagination',
  styleUrls: ['table-pagination.component.scss'],
  templateUrl: 'table-pagination.component.html',
})
export class TablePaginationComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'city', 'adress', 'image'];
  dataSource = new MatTableDataSource<Building>(Buildings);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

const Buildings: Building[] = [
  { name: 'Beryllium', city:'A', adress: 'a1', image: 'Be'},
  { name: 'Boron', city:'B', adress: 'a2', image: 'B'},
  { name: 'Carbon', city:'C', adress: 'a3', image: 'C'},
  { name: 'Beryllium', city:'A', adress: 'a1', image: 'Be'},
  { name: 'Boron', city:'B', adress: 'a2', image: 'B'},
  { name: 'Carbon', city:'C', adress: 'a3', image: 'C'},
  { name: 'Beryllium', city:'A', adress: 'a1', image: 'Be'},
  { name: 'Boron', city:'B', adress: 'a2', image: 'B'},
  { name: 'Carbon', city:'C', adress: 'a3', image: 'C'},
  { name: 'Beryllium', city:'A', adress: 'a1', image: 'Be'},
  { name: 'Boron', city:'B', adress: 'a2', image: 'B'},
  { name: 'Carbon', city:'C', adress: 'a3', image: 'C'},
  { name: 'Beryllium', city:'A', adress: 'a1', image: 'Be'},
  { name: 'Boron', city:'B', adress: 'a2', image: 'B'},
  { name: 'Carbon', city:'C', adress: 'a3', image: 'C'}
];