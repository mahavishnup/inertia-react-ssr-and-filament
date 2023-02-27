<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $url = config('app.asset_url');

        if (app()->environment('production') && ! @$url) {
            URL::forceScheme('https');
        }

        Paginator::useBootstrap();
        date_default_timezone_set(env('APP_TIMEZONE', 'UTC'));
        Schema::defaultStringLength(191);
    }
}
