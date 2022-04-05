import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'person'
})

export class customPipe implements PipeTransform{
    transform(arg1: string, arg2: string) {
        switch(arg2){
            case 'Male':
                return `Mr. ${arg1}`
            case 'Female':
                return `Ms. ${arg1}`
            default:
                return `Select proper gender`
        }
    }
}