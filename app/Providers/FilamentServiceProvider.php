<?php

namespace App\Providers;

//use App\Filament\Pages\Auth\Profile;
use Filament\Facades\Filament;
use Filament\Navigation\UserMenuItem;
use Illuminate\Foundation\Vite;
use Illuminate\Support\HtmlString;
use Illuminate\Support\ServiceProvider;

class FilamentServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
//        Filament::pushMeta([
//            new HtmlString(sprintf('<link rel="manifest" href="%s" />', asset('manifest.json'))),
//        ]);

        Filament::serving(function () {
            Filament::registerTheme(
                app(Vite::class)('resources/filament/css/app.css'),
            );
//            if (app()->environment('production')) {
//                Filament::registerScripts([
//                    asset('theme/assets/js/security.js'),
//                ], true);
//            }
        });

//        Filament::registerNavigationGroups([
//            'Ferries',
//            'Wallets',
//            'Tickets',
//            'Blocks',
//            'Reports',
//            'Finances',
//            'Orders',
//            'Blog',
//            'Filament Shield',
//            'Settings',
//        ]);

//        Filament::serving(function () {
//            Filament::registerUserMenuItems([
//                UserMenuItem::make()
//                    ->label('Profile')
//                    ->url(Profile::getUrl())
//                    ->icon('heroicon-o-user'),
//            ]);
//        });
    }
}
