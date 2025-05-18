const virus = extendContent(Block, "virus", {
  update(tile){
    // Radius 3 unit
    Groups.unit.each(u => {
      if(u.within(tile.drawx(), tile.drawy(), 48)){ // 48 = 3 tile = 3*8px
        u.damage(2); // kasih damage kecil terus-menerus
      }
    });
  },
  draw(tile){
    this.super$draw(tile); // tetap gambar default
  }
});

exports.virus = virus;
