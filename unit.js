class Unit {
    constructor(type, health, distance, maxHealth, maxDistance) { 
        this.type = type;
        this.health = health;
        this.distance = distance
        this.maxHealth = maxHealth;
        this.maxDistance = maxDistance;
    };
    isReadyToMove() {
        return this.distance > 0 && this.health > this.maxHealth/3; // если жизни меньше 1/3, то солдат ранен и не может двигаться.
    }
    isReadyToFight() {
        return this.health > 0;
    }
    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance
    }
    clone() {
       return new Unit(this.type, this.health, this.distance, this.maxHealth, this.maxDistance);
    }

}

