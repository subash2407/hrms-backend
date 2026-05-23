import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { responseMessageGenerator } from 'src/common/helpers/helpers.service';

@Injectable()
export class AuthService {

    async login(data:LoginDto): Promise<any> {
        try{
            return await responseMessageGenerator('success', 'Login successful', data);
        } catch (error) {
            return await responseMessageGenerator('error', error.message, null);
        }
    }
}
