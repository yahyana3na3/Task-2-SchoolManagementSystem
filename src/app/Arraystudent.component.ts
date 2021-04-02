import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

export interface Student {
    name:string,
    id:number,
    gba:number,
    studentdate:Date
}