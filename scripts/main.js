const VirusBlock = extendContent(Block, "virus", {
  update(tile){
    // Damage semua unit dalam radius 3 tiles
    Units.nearbyEnemies(tile.team, tile.x * Vars.tilesize, tile.y * Vars.tilesize, 48, cons(unit => {
      unit.damage(2); // Damage kecil tiap tick
    }));
  }
});
