package org.zappy;

import org.robotframework.javalib.annotation.RobotKeywords;
import org.robotframework.javalib.annotation.RobotKeyword;

@RobotKeywords
public class keywords {
    public keywords(){}

    @RobotKeyword
    public static float sum(float n1, float n2){
        return n1+n2;
    }
}