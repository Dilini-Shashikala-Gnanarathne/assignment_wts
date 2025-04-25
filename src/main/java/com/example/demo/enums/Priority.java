package com.example.demo.enums;

public enum Priority {
    LOW(1, "Low Priority"),
    MEDIUM(2, "Medium Priority"),
    HIGH(3, "High Priority");

    private final int level;
    private final String description;

    Priority(int level, String description) {
        this.level = level;
        this.description = description;
    }

    public static Priority fromLevel(int level) {
        for (Priority p : values()) {
            if (p.level == level) return p;
        }
        throw new IllegalArgumentException("Invalid priority level: " + level);
    }

    public int getLevel() {
        return level;
    }

    public String getDescription() {
        return description;
    }
}
