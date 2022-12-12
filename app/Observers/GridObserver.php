<?php

namespace App\Observers;

use App\Models\Grid;
use App\Models\StockHistory;

class GridObserver
{
    /**
     * Handle the Grid "created" event.
     *
     * @param  \App\Models\Grid  $grid
     * @return void
     */
    public function created(Grid $grid)
    {
        //
    }

    /**
     * Handle the Grid "updated" event.
     *
     * @param  \App\Models\Grid  $grid
     * @return void
     */
    public function updated(Grid $grid)
    {
        if($grid->wasChanged('stock')){
            StockHistory::create([
                'grid_id' => $grid->id,
                'user_id' => auth()->user()->id,
                'stock_movement' => $grid->stock - $grid->getOriginal('stock')
            ]);
        }
    }

    /**
     * Handle the Grid "deleted" event.
     *
     * @param  \App\Models\Grid  $grid
     * @return void
     */
    public function deleted(Grid $grid)
    {
        //
    }

    /**
     * Handle the Grid "restored" event.
     *
     * @param  \App\Models\Grid  $grid
     * @return void
     */
    public function restored(Grid $grid)
    {
        //
    }

    /**
     * Handle the Grid "force deleted" event.
     *
     * @param  \App\Models\Grid  $grid
     * @return void
     */
    public function forceDeleted(Grid $grid)
    {
        //
    }
}
