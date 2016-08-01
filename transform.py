#!/usr/bin/python

import sys


def main( argv ):
    try:
        filename = argv[1]
    except:
        print( "Please provide file name!" )
        return 1

    with open( filename, "r" ) as file:
        content = file.readlines()

    for line in content:
        if line.startswith( "#" ):
            continue

        tokens = line.split( " \\ " )

        result = "<tr>"
        result += "<td>" + tokens[0] + "</td>"
        result += "<td>" + tokens[1] + "</td>"
        result += "<td>" + tokens[2] + "</td>"
        
        # HACK: Allow the Video field to be empty if there is no video
        if tokens[3] == '-':
            result += "<td>-</td>"
        else:
            result += "<td><a href='" + tokens[3] + "'>Video</a></td>"
            
        result += "<td><a href='" + tokens[4] + "'>PDF</a></td>"
        result += "<td><a href='" + tokens[5].strip( "\n" ) + "'>MIDI</a></td>"
        result += "</tr>"

        print( result )


if __name__ == "__main__":
    sys.exit( main( sys.argv ) )
