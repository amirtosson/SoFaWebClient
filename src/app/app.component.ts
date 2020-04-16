import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient) { }

    title = 'SoFaWebClient';

    onClickMe() {
        console.log('sa');

        const options =
        {
            headers: this.MakeHeaders()
        };
        this.http.post<any>('http://127.0.0.1:54000/', 'ssssss', options).subscribe();

    }

    private MakeHeaders(): HttpHeaders
    {
        const headers = new HttpHeaders(
        {

            
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
        });
        return headers;
    }
}
