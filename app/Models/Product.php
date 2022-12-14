<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, HasSlug;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'category_id',
        'sub_category_id'
    ];

    protected $appends = ['category, sub_category'];

    public function grids()
    {
        return $this->hasMany('grids', 'product_id', 'id')->with(['size', 'color', 'style']);
    }

    public function category()
    {
        return $this->hasOne('categories', 'id', 'category_id');
    }

    public function subCategory()
    {
        return $this->hasOne('sub_categories', 'id', 'sub_category_id');
    }

    public function getCategoryAttribute()
    {
        return $this->category()->first()->name;
    }

    public function getSubCategoryAttribute()
    {
        return $this->subCategory()->first()->name;
    }

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

}
