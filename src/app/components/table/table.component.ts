import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../../components/modal/modal.component';
import { HttpService } from '../../shared/http/http.service';

export interface UserData {
  id: string;
  title: string;
  body: string;
  idEdit: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() editMode = true;

  displayedColumns: string[] = ['id', 'title', 'body', 'idEdit'];
  dataSource: MatTableDataSource<UserData>;
  users = [];
  showContent = false;

  mdId = '';
  mdTitle = '';
  mdComments = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public http: HttpService
  ) {}
  ngOnInit(): void {
    this.preload();
  }

  preload() {
    this.http.getPosts().then(
      (data) => {
        let arregloAux = [];
        for (const value of data as any) {
          const nodo = {
            id: value.id,
            title: value.title,
            body: value.body,
            idEdit: value.id,
          };
          arregloAux.push(nodo);
        }
        this.users = arregloAux;
        this.dataSource = new MatTableDataSource(this.users);

        this.showContent = true;

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error('Error..', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(value: any): void {
    localStorage.setItem('editPost', value);
    this.editMode = false;
    this.getInfoPost(value);
  }

  getInfoPost(value) {
    this.http.getPostsInfo(value).then(
      (data) => {
        this.mdId = data['id'];
        this.mdTitle = data['title'];
        this.mdComments = data['body'];
      },
      (err) => {
        console.error('Error: ', err);
      }
    );
  }

  openModal(value): void {
    this.http.getPostsInfo(value).then(
      (data) => {
        this.mdId = data['id'];
        this.mdTitle = data['title'];
        this.mdComments = data['body'];
        localStorage.setItem('infoModal', JSON.stringify(data));
        this.dialog.open(ModalComponent);
      },
      (err) => {
        console.error('Error: ', err);
      }
    );
  }

  onBack(){
	  this.editMode = true;
  }
}
