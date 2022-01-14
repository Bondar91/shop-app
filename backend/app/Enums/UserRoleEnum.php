<?php

namespace App\Enums;

class UserRoleEnum {
    const ADMIN = 'administrator';
    const SELLER = 'sprzedawca';
    const CUSTOMER = 'klient';

    const TYPES = [
        self::ADMIN,
        self::CUSTOMER,
        self::SELLER
    ];
}
